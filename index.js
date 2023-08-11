fetch("https://official-joke-api.appspot.com/random_joke")
.then(response => response.json())
.then(data => {
    data.forEach(joke => {
        
    })
})


const buttonTag = document.createElement("button");
buttonTag.textContent = "Generate Joke";

document.body.appendChild(buttonTag);


