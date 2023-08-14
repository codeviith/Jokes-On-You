fetch("http://localhost:3500/Jokes")
.then(response => response.json())
.then(jokes => {
    jokes.forEach(joke => {
        const id = joke.id
        // console.log(id)
        generateJokeButton.addEventListener("click", () => {
            let num = randomId();
            
            if(num === id) {
                return displayJokeSetup(joke);
            }

            const answerButton = document.createElement("button");
            answerButton.textContent = "Show Punchline";

            document.body.appendChild(answerButton);
        });
    });   
});

const displayedJoke = document.getElementById("joke-setup");
const generateJokeButton = document.getElementById("generate-joke");


function randomId() {
    return Math.ceil(Math.random() * 20);
}

function displayJokeSetup (joke) {
    displayedJoke.textContent = joke.setup;
}






// let likeCount;

// const likeButtonTag = document.createElement("button");
// likeButtonTag.textContent = "Like"

// document.body.appendChild(likeButtonTag);

// const totalNumOfLikes = document.createElement("span");
// totalNumOfLikes.textContent = likeCount + "Likes"
