const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
const choice = document.querySelectorAll(".choice");

let playerChoice;
let computerChoice;
let resultChoice;

choice.forEach(button => button.addEventListener("click", () => {

    playerChoice = button.textContent;
    computerTurn();
    player.textContent = 'Player:   ${playerChoice}';
    computer.textContent = 'Computer:   ${computerChoice}';
    result.textContent = checkWinner();
} ))

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3)
    switch(randNum){
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissor";
            break;
    }
}
function checkWinner(){
    if(playerChoice==computerChoice){
        return "Draw!";
    }else if(computerChoice=="rock"){
        return (playerChoice == "paper") ? "You Win!" : "You Lose !"
    }else if(computerChoice=="paper"){
        return (playerChoice == "scissor") ? "You Win!" : "You Lose !"
    }else if(computerChoice=="scissor"){
        return (playerChoice == "rock") ? "You Win!" : "You Lose !"
    }
}