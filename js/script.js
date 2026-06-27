let play = document.querySelector(".play");
let userChoice = document.querySelector(".userChoice");
let randomNumber = 0;
let computerChoice = document.querySelector(".computerChoice");

play.addEventListener("click", function () {
    randomNumber = Math.random();
    let input = document.querySelector(".input");
    userChoice.innerHTML = input.value;
    computerChoice.innerHTML = randomNumber;
});
