---
title: Quiz
layout: single
permalink: /quiz/
---

<script>

    // YOU HAVE TO GET THE ID SOMEHOW
    function create_questions(set) {
        
        const ID = 0; // Change later
        url = "";

        const body = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            credentials : "include",
            body: JSON.stringify({id : ID})
        }

        fetch(url, body).then(data => data.json()).then(data => {

        });
    }
</script>