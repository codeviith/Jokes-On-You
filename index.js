fetch("https://official-joke-api.appspot.com/random_joke")
.then(response => response.json())
.then(data => {
    data.forEach(joke => {
        
    })
})



let likeCount;

function totalLikeCounts () {

}

const likeButtonTag = document.createElement("button");
likeButtonTag.textContent = "Like"


const totalNumOfLikes = document.createElement("span");
totalNumOfLikes.textContent = likeCount + "likes"
