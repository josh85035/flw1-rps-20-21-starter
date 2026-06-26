let play = document.querySelector(".play");
let userChoice = document.querySelector(".userChoice");

play.addEventListener("click",function(){
    let input = document.querySelector(".input");
    userChoice.innerHTML = input.value;
});
