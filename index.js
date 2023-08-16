const jokeDisplay = document.querySelector(".container-2");
const generateJokeButton = document.getElementById("generate-joke-button");
const showPunchlineButton = document.getElementById("show-punchline");
const jokesHistory = document.getElementById("joke-container");
const prankButton = document.getElementById("like-prank-button");

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
        });
    });


    showPunchlineButton.addEventListener("dblclick", () => {
        displayPunchline(currentJoke);

        const jokeHistoryTag = document.createElement("li");
        jokeHistoryTag.id = currentJoke.id;

        jokeHistoryTag.textContent = displayJokeSetup(currentJoke);
        jokeDisplay.textContent = displayPunchline(currentJoke);
        jokesHistory.appendChild(jokeHistoryTag);

        jokeHistoryTag.addEventListener("mouseover", (e) => {
            e.target.style.color = 'green';
            let tagId = jokeHistoryTag.id;
            const foundJoke = jokes.find(joke => {
                return parseInt(tagId) === joke.id;
            })
            jokeDisplay.textContent = foundJoke.punchline;
        })

        jokeHistoryTag.addEventListener("mouseout", (e) => {
            e.target.style.color = 'black'
        });
    });
});

prankButton.addEventListener("click", () => {
    alert("HAHA JOKES ON YOU! YOU GOT PRANKED");
})

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
