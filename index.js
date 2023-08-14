fetch("http://localhost:3500/Jokes")
.then(response => response.json())
.then(jokes => {
    generateJokeButton.addEventListener("click", () => {
        jokes.find(joke => {
            if (randomId(joke) === joke.id) {
                return displayJokeSetup(joke);
            }
            // console.log(randomId())
        });


        // displayedJoke.textContent = currentJoke.textContent;
        // punchlineBox.appendChild(displayedJoke)

        });
    });   

const currentJoke = document.getElementById("joke-setup");
const generateJokeButton = document.getElementById("generate-joke-button");
const generateJokeDiv = document.getElementById("generate-joke");
const answerButton = document.createElement("button");

// const

const punchlineBox = document.getElementById("punchline-box");
answerButton.textContent = "Show Punchline";
generateJokeDiv.appendChild(answerButton);

answerButton.addEventListener("click", () => {
    
})

// function displayPunchline(joke) {
//     .textContent = joke.punchline;
// }

function randomId() {
    return Math.ceil(Math.random() * 20);
}

function displayJokeSetup (joke) {
    currentJoke.textContent = joke.setup;
}






// let likeCount;

// const likeButtonTag = document.createElement("button");
// likeButtonTag.textContent = "Like"

// document.body.appendChild(likeButtonTag);

// const totalNumOfLikes = document.createElement("span");
// totalNumOfLikes.textContent = likeCount + "Likes"
