
// let setupHistory;
// let punchlineHistory;

const jokeDisplay = document.querySelector(".container-2");
const generateJokeButton = document.getElementById("generate-joke-button");
const showPunchlineButton = document.getElementById("show-punchline");

const displayedJoke = document.createElement("li");
const displayedPunchline = document.createElement("li");

const jokesBox = document.querySelector(".container-1");

// const currentPunchline = document.getElementById("joke-punchline");
// const jokeButtonDiv = document.getElementById("joke-button");


fetch("http://localhost:3500/Jokes")
.then(response => response.json())
.then(jokes => {
    generateJokeButton.addEventListener("click", () => {
        const randomNum = randomId();

        jokes.find(joke => {
            if (randomNum === joke.id) {
                displayJokeSetup(joke);

                showPunchlineButton.addEventListener("click", () => {
                    displayPunchline(joke);

                    displayedPunchline.textContent = jokeDisplay.textContent;
                    jokesBox.appendChild(displayedPunchline);
                    // punchlineHistory = displayedPunchline;
                });
            }

            displayedJoke.textContent = jokeDisplay.textContent;
            jokesBox.appendChild(displayedJoke);
            // setupHistory = displayedJoke;
        });
    });
});



function randomId() {
    let random = Math.ceil(Math.random() * 20);
    // console.log(random);
    return random;
}

function displayJokeSetup (joke) {
    jokeDisplay.textContent = joke.setup;
}

function displayPunchline(joke) {
    jokeDisplay.textContent = joke.punchline;
}






// let likeCount;

// const likeButtonTag = document.createElement("button");
// likeButtonTag.textContent = "Like"

// document.body.appendChild(likeButtonTag);

// const totalNumOfLikes = document.createElement("span");
// totalNumOfLikes.textContent = likeCount + "Likes"
