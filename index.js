const jokeDisplay = document.querySelector(".container-2");
const generateJokeButton = document.getElementById("generate-joke-button");
const showPunchlineButton = document.getElementById("show-punchline");
const displayedJoke = document.getElementById("setup");
const jokesHistory = document.getElementById("joke-container");

let currentJoke;
let randomNum;

fetch("http://localhost:3500/Jokes")
.then(response => response.json())
.then(jokes => {
    generateJokeButton.addEventListener("click", () => {
        randomNum = randomId();
        
        jokes.find(joke => {
            if (randomNum === joke.id) {
                currentJoke = joke;
                displayJokeSetup(joke);
            }
            
            displayedJoke.textContent = jokeDisplay.textContent;
        });
    });

    showPunchlineButton.addEventListener("dblclick", () => {
        displayPunchline (currentJoke);

        const jokeHistoryTag = document.createElement("li");
        jokeHistoryTag.id = currentJoke.id;

        jokeHistoryTag.textContent = displayedJoke.textContent;
        jokesHistory.appendChild(jokeHistoryTag);

        jokeHistoryTag.addEventListener("mouseover", () => {
            let tagId = jokeHistoryTag.id;
            const foundJoke = jokes.find(joke => {
                return parseInt(tagId) === joke.id;
            })

            jokeDisplay.textContent = foundJoke.punchline;
        })
    });
});


function randomId() {
    let random = Math.ceil(Math.random() * 35);
    return random;
}


function displayJokeSetup (joke) {
    return jokeDisplay.textContent = joke.setup;
}


function displayPunchline(joke) {
    return jokeDisplay.textContent = joke.punchline;
}

