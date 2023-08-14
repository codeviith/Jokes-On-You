fetch("https://official-joke-api.appspot.com/random_joke")
.then(response => response.json())
.then(data => {
    data.forEach(joke => {
        
    })
})


const buttonTag = document.createElement("button");
buttonTag.textContent = "Generate Joke";

document.body.appendChild(buttonTag);

let likeCount;

function totalLikeCounts () {

}

const likeButtonTag = document.createElement("button");
likeButtonTag.textContent = "Like"


const totalNumOfLikes = document.createElement("span");
totalNumOfLikes.textContent = likeCount + "likes"
