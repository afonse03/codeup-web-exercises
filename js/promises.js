//personal access token from GitHub: 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

// fetch(url, {headers: {'Authorization': 'token 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'}})

//create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last push event that user made
"use strict";

function userLastPush(username) {
    const url = `https://api.github.com/users/${username}/events`;
}

console.log(url);

function lastPushGithub(date) {
    fetch(`https://api.github.com/users/${date}/events`, {headers: {'Authorization': GITHUB_TOKEN}})
        .then()
}


// function lastPush(date) {
//     fetch(`https://api.github.com/users/${date}/events`, {headers: {'Authorization': GITHUB_TOKEN}}).then((response) => {
//         const users =
//     })
// }
