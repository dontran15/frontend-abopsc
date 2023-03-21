---
title: login
layout: single
permalink: /login/
---

<table>
    <tr>
        <th>Username</th>
        <th><input type="text" id="username" name="username"></th>
    </tr>
        <th>Password</th>
        <th><input type="text" id="password" name="password">
    <tr>
    </tr>
        <td><button type="submit" value="Submit" onclick="login_user()">Submit</button></td>
    <tr>
    </tr>

<script>

    // Replace with domain and api call of backend
    url = ""

    function login_user() {
        const body = {
            username: document.getElementById("username"),
            password: document.getElementById("password")
        };

        const request_options = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            body: JSON.stringify(body),
            headers: {
                "content-type" : "application/json"
            }
        };

        fetch(url, request_options).then(response => {
            if (response.status != 200) {
                alert("Error ocurred: Check username and password");
                return;
            }

            alert("Logged in");
            console.log(response);
            window.location.href = "/";
        })


    }
</script>
