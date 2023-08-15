const jokeDisplay = document.querySelector(".container-2");
const generateJokeButton = document.getElementById("generate-joke-button");
const showPunchlineButton = document.getElementById("show-punchline");

const displayedJoke = document.getElementById("setup");
const displayedPunchline = document.getElementById("punchline");

const jokesBox = document.querySelector(".container-1");
const jokesBoxForm = document.getElementById("jokes-box-form");

const jokesHistory = document.getElementById("joke-container");

let currentJoke;

fetch("http://localhost:3500/Jokes")
.then(response => response.json())
.then(jokes => {
    generateJokeButton.addEventListener("click", () => {
        let randomNum = randomId();

        jokes.find(joke => {
            if (randomNum === joke.id) {
                // jokesHistory.textContent = "";
                currentJoke = joke;
                displayJokeSetup(joke);
            }

            displayedJoke.textContent = jokeDisplay.textContent;
            jokesBox.appendChild(displayedJoke);
            // setupHistory = displayedJoke;
        });
    });

    showPunchlineButton.addEventListener("dblclick", () => {
        displayPunchline(currentJoke);

        const jokeHistoryTag = document.createElement("li");
        jokeHistoryTag.textContent = displayedJoke.textContent;

        jokesHistory.appendChild(jokeHistoryTag);
    });
});


function randomId() {
    let random = Math.ceil(Math.random() * 20);
    return random;
}

function displayJokeSetup (joke) {
    jokeDisplay.textContent = joke.setup;
}

function displayPunchline(joke) {
    jokeDisplay.textContent = joke.punchline;
}

