---
title: Lab Scores
layout: single
permalink: /scores/
---

{% include lab_nav.html %}

### Score Rundown:
* Lab - 2 points
* Lesson - 1 point
* Total - 3 points

<body>
    <div id="scores">
    </div>
</body>

<script>
    let people = [
        ["Name","Lab Score (Peer)","Lesson Score (Peer)","Lab Score (Live)","Lab Score (Live)","Total"],
        ["Evan S.","/2","/1","/2","/1","/3"]
    ]

    function makeTableHTML(people) {
        var result = "<table>";
        result += "<thead><tr><th>Name</th><th>Lab Score (Peer)</th><th>Lesson Score (Peer)</th><th>Lab Score (Live)</th><th>Lab Score (Live)</th><th>Total</th></thead><tbody>";
        // Create header row. Better way to do this?
        //for (var i = 0; i < array.length; i++) {
        for (var i = people.length-1; i > 0; i--) {
            result += "<tr>";
            for (var j = 0; j < people[i].length; j++) {
                result += "<td>"+people[i][j]+"</td>";   
            }   
            result += "</tr>";
        }   
        result += "</tbody></table>";
        document.getElementById("scores").innerHTML = result;
    }
    makeTableHTML(people);

</script>

<style href="_sass/minimal-mistakes/_tables.scss"></style>