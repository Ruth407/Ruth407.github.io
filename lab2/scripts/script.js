console.log("running");
console.log("Guess number between 1 and 99");

const max = 99;
let correctNumber = Math.floor(Math.random() * max); //variable
let attempts = 0;


let correctMessage = "Congrats!";
let incorrectMessage = "Sorry, try again!"

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");



//function displayWinMessage(){
//    guessResult.textContent = correctMessage;
//    guessResult.style.color = "green";
//}



guessButton.addEventListener("click", function () {
    attempts++;

if(attempts< 7){
    if(guessInput.value == correctNumber) {
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";
        guessResult.textContent = "# of attempts: " + attempts;
    } else if(guessInput.value > correctNumber) {
        guessResult.textContent = "Your guesss was too high";
        guessResult.style.color = "orange";
        } else {
            guessResult.textContent = "Your guess was too low";
            guessResult.style.color = "blue";
        }
    } else {
    guessResult.textContent = "you lose!";
    guessResult.style.color = "red";
    }
});
