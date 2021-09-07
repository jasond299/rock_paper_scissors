const test = document.querySelector('.score');
const message = document.querySelector('.message');




function computerPlay(){
    let x = Math.floor(Math.random() * 3);

    if (x == 0)
        return "Rock";
    if (x == 1)
        return "Scissors";
    if (x == 2)
        return "Paper";
}

function playerSelection(index){
    if (index == 0)
        return "ROCK";
    if (index == 1)
        return "PAPER";
    if (index == 2)
        return "SCISSORS"
}

function playRound(playerSelection,computerSelection){
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase())
         message.textContent = "Its a Draw";
        // return "Its a Draw";
    
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS")
        message.textContent = "You Win! Rock beats Scissors";
    
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER")
        message.textContent = "You Lose! Paper beats Rock";
    
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER")
        message.textContent = "You Win! Scissors beats Paper";
    
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK")
        message.textContent = "You Lose! Rock beats Scissors";
        
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS")
        message.textContent = "You Lose! Scissors beats Paper";
    
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")
        message.textContent = "You Win! Paper beats Rock";
}

function game(){
    for (let i=0; i<5; i++){
        let x = prompt("Choose Rock Paper Scissor:");
        console.log(playRound(x,computerPlay()));
    }
}




let playerScore = 0;
let computerScore = 0;

const choice = Array.from(document.querySelectorAll('.choice-img'));


choice.forEach((button, index) => {
    button.addEventListener('click', () => {
        playerChoice = playerSelection(index);
        console.log(playRound(playerChoice,computerPlay()));
    })

});





//console.log(playRound("rock",computerPlay()));

me.textContent = "Its a draw";
//console.log(computerPlay());

let score;



score = playerScore + ' - ' + computerScore;

test.textContent = score;


//game();