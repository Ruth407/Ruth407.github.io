//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
let totalWins = 0;
let totalLosses = 0;

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

    document.querySelector("#attemptsLeft").textContent = 7;

    document.querySelector("#wins").textContent = totalWins;
    document.querySelector("#losses").textContent = totalLosses;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";
  

   //showing the guess button
   document.querySelector("#guessBtn").style.display = "inline";

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus(); //adding focus to textbox
   playerGuess.value = "";

   let feedback = document.querySelector("#feedback");
   feedback.textContent = ""; //clearing the feedback

   //clearing previous guesses
   document.querySelector("#guesses").textContent ="";


}

function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent ="";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts:" + attempts);
    let remaining = 7 - attempts;
    document.querySelector("#attemptsLeft").textContent = remaining;
    feedback.style.color = "orange";
    if (guess == randomNumber){
        totalWins++;
        document.querySelector("#wins").textContent = totalWins;
        feedback.textContent = "You guessed it! You won!";
        feedback.style.color = "darkgreen";
        gameOver();
    } else{
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7){
            totalLosses++;
            document.querySelector("#losses").textContent = totalLosses;
            feedback.textContent = "Sorry, you lost! The number was " +randomNumber;
            
            feedback.style.color = "red";
            gameOver();
        }else if(guess > randomNumber){
            feedback.textContent = "Guess was high";
        }else{
            feedback.textContent = "Guess was low";
        }
        

    }


}
function gameOver(){
        let guessBtn = document.querySelector("#guessBtn");
        let resetBtn = document.querySelector("#resetBtn");
        guessBtn.style.display ="none"; //hides Guess button
        resetBtn.style.display= "inline"; //display Reset Button
    }