fetch("http://localhost:3500/Jokes")
.then(response => response.json())
.then(jokes => {
    generateJokeButton.addEventListener("click", () => {
        jokes.find(joke => {
            if (randomId() === joke.id) {
                displayJokeSetup(joke);

                answerButton.addEventListener("click", () => {
                    displayPunchline(joke);

                    displayedPunchline.textContent = currentPunchline.textContent;
                    punchlineBox.appendChild(displayedPunchline);
                });
            }

            displayedJoke.textContent = currentJoke.textContent;
            punchlineBox.appendChild(displayedJoke);
        });
    });
});

const currentJoke = document.getElementById("joke-setup");
const currentPunchline = document.getElementById("joke-punchline");
const generateJokeButton = document.getElementById("generate-joke-button");
const generateJokeDiv = document.getElementById("generate-joke");
const answerButton = document.createElement("button");

const displayedJoke = document.createElement("li");
const displayedPunchline = document.createElement("li");

const punchlineBox = document.getElementById("punchline-box");

answerButton.textContent = "Show Punchline";
generateJokeDiv.appendChild(answerButton);


function randomId() {
    return Math.ceil(Math.random() * 20);
}

function displayJokeSetup (joke) {
    currentJoke.textContent = joke.setup;
}

function displayPunchline(joke) {
    currentPunchline.textContent = joke.punchline;
}




// let likeCount;

// const likeButtonTag = document.createElement("button");
// likeButtonTag.textContent = "Like"

// document.body.appendChild(likeButtonTag);

// const totalNumOfLikes = document.createElement("span");
// totalNumOfLikes.textContent = likeCount + "Likes"
