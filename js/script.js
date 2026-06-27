let play = document.querySelector(".play");
let userChoice = document.querySelector(".userChoice");
let randomNumber = 0;
let computerChoice = document.querySelector(".computerChoice");

play.addEventListener("click", function () {
    randomNumber = Math.random();
    let input = document.querySelector(".input");
    if (input.value.trim() === ""){
        userChoice.innerHTML = "Choose between Rock, Paper, or Scissors.";
    } else if (input.value.trim().toLowerCase() === "rock" ||
               input.value.trim().toLowerCase() === "paper" ||
               input.value.trim().toLowerCase() === "scissors"){
        userChoice.innerHTML = input.value;
    } else {
        userChoice.innerHTML = "Choose between Rock, Paper, or Scissors."
    }

    if (randomNumber < 0.33){
        computerChoice.innerHTML = "Rock";
    } else if (randomNumber > 0.66){
        computerChoice.innerHTML = "Paper";
    } else {
        computerChoice.innerHTML = "Scissors";
    }
});
