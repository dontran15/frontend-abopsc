/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LcsDiff } from '../../../../base/common/diff/diff.js';
import * as strings from '../../../../base/common/strings.js';
import { Range } from '../../../common/core/range.js';
import { GhostText, GhostTextPart } from './ghostText.js';
export function normalizedInlineCompletionsEquals(a, b) {
    if (a === b) {
        return true;
    }
    if (!a || !b) {
        return false;
    }
    return a.range.equalsRange(b.range) && a.text === b.text && a.command === b.command;
}
/**
 * @param previewSuffixLength Sets where to split `inlineCompletion.text`.
 * 	If the text is `hello` and the suffix length is 2, the non-preview part is `hel` and the preview-part is `lo`.
*/
export function inlineCompletionToGhostText(inlineCompletion, textModel, mode, cursorPosition, previewSuffixLength = 0) {
    if (inlineCompletion.range.startLineNumber !== inlineCompletion.range.endLineNumber) {
        // Only single line replacements are supported.
        return undefined;
    }
    const sourceLine = textModel.getLineContent(inlineCompletion.range.startLineNumber);
    const sourceIndentationLength = strings.getLeadingWhitespace(sourceLine).length;
    const suggestionTouchesIndentation = inlineCompletion.range.startColumn - 1 <= sourceIndentationLength;
    if (suggestionTouchesIndentation) {
        // source:      ··········[······abc]
        //                         ^^^^^^^^^ inlineCompletion.range
        //              ^^^^^^^^^^ ^^^^^^ sourceIndentationLength
        //                         ^^^^^^ replacedIndentation.length
        //                               ^^^ rangeThatDoesNotReplaceIndentation
        // inlineCompletion.text: '··foo'
        //                         ^^ suggestionAddedIndentationLength
        const suggestionAddedIndentationLength = strings.getLeadingWhitespace(inlineCompletion.text).length;
        const replacedIndentation = sourceLine.substring(inlineCompletion.range.startColumn - 1, sourceIndentationLength);
        const rangeThatDoesNotReplaceIndentation = Range.fromPositions(inlineCompletion.range.getStartPosition().delta(0, replacedIndentation.length), inlineCompletion.range.getEndPosition());
        const suggestionWithoutIndentationChange = inlineCompletion.text.startsWith(replacedIndentation)
            // Adds more indentation without changing existing indentation: We can add ghost text for this
            ? inlineCompletion.text.substring(replacedIndentation.length)
            // Changes or removes existing indentation. Only add ghost text for the non-indentation part.
            : inlineCompletion.text.substring(suggestionAddedIndentationLength);
        inlineCompletion = {
            range: rangeThatDoesNotReplaceIndentation,
            text: suggestionWithoutIndentationChange,
            command: inlineCompletion.command
        };
    }
    // This is a single line string
    const valueToBeReplaced = textModel.getValueInRange(inlineCompletion.range);
    const changes = cachingDiff(valueToBeReplaced, inlineCompletion.text);
    if (!changes) {
        // No ghost text in case the diff would be too slow to compute
        return undefined;
    }
    const lineNumber = inlineCompletion.range.startLineNumber;
    const parts = new Array();
    if (mode === 'prefix') {
        const filteredChanges = changes.filter(c => c.originalLength === 0);
        if (filteredChanges.length > 1 || filteredChanges.length === 1 && filteredChanges[0].originalStart !== valueToBeReplaced.length) {
            // Prefixes only have a single change.
            return undefined;
        }
    }
    const previewStartInCompletionText = inlineCompletion.text.length - previewSuffixLength;
    for (const c of changes) {
        const insertColumn = inlineCompletion.range.startColumn + c.originalStart + c.originalLength;
        if (mode === 'subwordSmart' && cursorPosition && cursorPosition.lineNumber === inlineCompletion.range.startLineNumber && insertColumn < cursorPosition.column) {
            // No ghost text before cursor
            return undefined;
        }
        if (c.originalLength > 0) {
            return undefined;
        }
        if (c.modifiedLength === 0) {
            continue;
        }
        const modifiedEnd = c.modifiedStart + c.modifiedLength;
        const nonPreviewTextEnd = Math.max(c.modifiedStart, Math.min(modifiedEnd, previewStartInCompletionText));
        const nonPreviewText = inlineCompletion.text.substring(c.modifiedStart, nonPreviewTextEnd);
        const italicText = inlineCompletion.text.substring(nonPreviewTextEnd, Math.max(c.modifiedStart, modifiedEnd));
        if (nonPreviewText.length > 0) {
            const lines = strings.splitLines(nonPreviewText);
            parts.push(new GhostTextPart(insertColumn, lines, false));
        }
        if (italicText.length > 0) {
            const lines = strings.splitLines(italicText);
            parts.push(new GhostTextPart(insertColumn, lines, true));
        }
    }
    return new GhostText(lineNumber, parts, 0);
}
let lastRequest = undefined;
function cachingDiff(originalValue, newValue) {
    if ((lastRequest === null || lastRequest === void 0 ? void 0 : lastRequest.originalValue) === originalValue && (lastRequest === null || lastRequest === void 0 ? void 0 : lastRequest.newValue) === newValue) {
        return lastRequest === null || lastRequest === void 0 ? void 0 : lastRequest.changes;
    }
    else {
        const changes = smartDiff(originalValue, newValue);
        lastRequest = {
            originalValue,
            newValue,
            changes
        };
        return changes;
    }
}
/**
 * When matching `if ()` with `if (f() = 1) { g(); }`,
 * align it like this:        `if (       )`
 * Not like this:			  `if (  )`
 * Also not like this:		  `if (             )`.
 *
 * The parenthesis are preprocessed to ensure that they match correctly.
 */
function smartDiff(originalValue, newValue) {
    if (originalValue.length > 5000 || newValue.length > 5000) {
        // We don't want to work on strings that are too big
        return undefined;
    }
    function getMaxCharCode(val) {
        let maxCharCode = 0;
        for (let i = 0, len = val.length; i < len; i++) {
            const charCode = val.charCodeAt(i);
            if (charCode > maxCharCode) {
                maxCharCode = charCode;
            }
        }
        return maxCharCode;
    }
    const maxCharCode = Math.max(getMaxCharCode(originalValue), getMaxCharCode(newValue));
    function getUniqueCharCode(id) {
        if (id < 0) {
            throw new Error('unexpected');
        }
        return maxCharCode + id + 1;
    }
    function getElements(source) {
        let level = 0;
        let group = 0;
        const characters = new Int32Array(source.length);
        for (let i = 0, len = source.length; i < len; i++) {
            const id = group * 100 + level;
            // TODO support more brackets
            if (source[i] === '(') {
                characters[i] = getUniqueCharCode(2 * id);
                level++;
            }
            else if (source[i] === ')') {
                characters[i] = getUniqueCharCode(2 * id + 1);
                if (level === 1) {
                    group++;
                }
                level = Math.max(level - 1, 0);
            }
            else {
                characters[i] = source.charCodeAt(i);
            }
        }
        return characters;
    }
    const elements1 = getElements(originalValue);
    const elements2 = getElements(newValue);
    return new LcsDiff({ getElements: () => elements1 }, { getElements: () => elements2 }).ComputeDiff(false).changes;
}
