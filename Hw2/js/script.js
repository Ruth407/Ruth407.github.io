//event listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess)
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

let word = ["hedgehog","seahorse", "pirate", "photograph", "cheese", "banana","ski"]
let choice = "";
let showWord =[];
let wrongGuesses =0;

initializeGame();

function initializeGame() {
   choice = word[Math.floor(Math.random() * word.length)];
   console.log("randomWord: " + choice);
   
    
   //creates an array of underscores the same length as the chosen word
    showWord = Array(choice.length).fill("_");
    //adds space between each underscore
    let display = "";
    for (let i = 0; i < showWord.length; i++) {
    display += showWord[i] + " ";
}
    document.querySelector("#wordDisplay").textContent = display;

    // reset wrong guesses
    wrongGuesses = 0;

    // clear wrong letters
    document.querySelector("#wrongLetters").textContent = "";

    // reset image
    document.querySelector("#hangmanImg").src = "img/drawing1.png";

    // clear message
    document.querySelector("#message").textContent = "";

    // show guess button, hide reset
    document.querySelector("#guessBtn").style.display = "inline";
    document.querySelector("#resetBtn").style.display = "none";

    // clear input
    document.querySelector("#userInput").value = "";
    document.querySelector("#userInput").focus();
}

function checkGuess(){
    let message = document.querySelector("#message");
    message.textContent ="";

    //coneverts what user typed into lowercase and stores in guess
    let guess = document.querySelector("#userInput").value.toLowerCase();
    console.log("Player guess: " + guess);

    //checks if user typed a single letter
    if (!guess.match(/^[a-z]$/i)) {
        message.textContent = "Please enter a single letter.";
        return;
    }

    if(choice.toLowerCase().includes(guess)){
        //shows matching letters
        for(let i = 0; i < choice.length; i++){
            if(choice[i].toLowerCase() == guess )
            {
                showWord[i]= choice[i];

            }
        }
        // rebuild the display using a loop
        let display = "";
        for (let i = 0; i < showWord.length; i++) {
            display += showWord[i] + " ";
        }
        document.querySelector("#wordDisplay").textContent = display;

        // check win
        if (!showWord.includes("_")) {
            message.textContent = "You win!";
            endGame();
        }

    } else {
        // wrong guess
        wrongGuesses++;
        document.querySelector("#wrongLetters").textContent += guess + " ";

        // update hangman image
        document.querySelector("#hangmanImg").src = "img/drawing" + (wrongGuesses + 1) + ".png";

        // check loss
        if (wrongGuesses === 6) {
            message.textContent = "Game Over! The word was " + choice;
            endGame();
        }
    }


    }






function endGame() {
    document.querySelector("#guessBtn").style.display = "none";
    document.querySelector("#resetBtn").style.display = "inline";
}