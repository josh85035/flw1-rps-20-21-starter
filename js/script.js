let play = document.querySelector(".play");
let userChoice = document.querySelector(".userChoice");
let result = document.querySelector(".result");
let randomNumber = 0;
let computerChoice = document.querySelector(".computerChoice");

play.addEventListener("click", function () {
    randomNumber = Math.random();
    let input = document.querySelector(".input");

    // take input and make sure it is rock, paper, or scissors
    if (input.value.trim() === ""){
        userChoice.innerHTML = "Choose between Rock, Paper, or Scissors.";
    } else if (input.value.trim().toLowerCase() === "rock" ||
               input.value.trim().toLowerCase() === "paper" ||
               input.value.trim().toLowerCase() === "scissors"){
        userChoice.innerHTML = input.value;
    } else {
        userChoice.innerHTML = "Choose between Rock, Paper, or Scissors."
    }

    //generate psuedorandom chance for rock, paper, or scissors
    if (randomNumber < 0.33){
        computerChoice.innerHTML = "rock";
    } else if (randomNumber > 0.66){
        computerChoice.innerHTML = "paper";
    } else {
        computerChoice.innerHTML = "scissors";
    }

    //see who wins
    if (input.value.trim().toLowerCase() === "rock" && computerChoice.innerHTML==="scissors" ||
        input.value.trim().toLowerCase() === "scissors" && computerChoice.innerHTML === "paper" ||
        input.value.trim().toLowerCase() === "paper" && computerChoice.innerHTML === "rock")
    {
        result.innerHTML = "You Win!";
    } else if (input.value.trim().toLowerCase() === computerChoice.innerHTML){
        result.innerHTML="You Tie!";
    } else {
        result.innerHTML = "You Lose";
    }
    
    input.value="";
});
