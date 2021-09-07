const test = document.querySelector('.score');
const message = document.querySelector('.message');

let playerScore = 0;
let computerScore = 0;

let score;

function scoreUpdate(playerScore, computerScore){
    score = playerScore + ' - ' + computerScore;
    test.textContent = score;
}





function computerPlay(){
    let num = Math.floor(Math.random() * 3);

    if (num == 0)
        return "Rock";
    if (num == 1)
        return "Scissors";
    if (num == 2)
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
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
         message.textContent = "Its a Draw";
    }
    
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS"){
        playerScore += 1;
        scoreUpdate(playerScore, computerScore);
        message.textContent = "You Win! Rock beats Scissors";
    }
    
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER"){
        computerScore += 1;
        scoreUpdate(playerScore, computerScore);    
        message.textContent = "You Lose! Paper beats Rock";
    }
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER"){
        playerScore += 1;
        scoreUpdate(playerScore, computerScore);
        message.textContent = "You Win! Scissors beats Paper";
    }
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK"){
        computerScore += 1;
        scoreUpdate(playerScore, computerScore);    
        message.textContent = "You Lose! Rock beats Scissors";
    }
        
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS"){
        computerScore += 1;
        scoreUpdate(playerScore, computerScore);    
        message.textContent = "You Lose! Scissors beats Paper";
    }
    
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK"){
        playerScore += 1;
        scoreUpdate(playerScore, computerScore);
        message.textContent = "You Win! Paper beats Rock";
    }
}

function game(){
    for (let i=0; i<5; i++){
        let x = prompt("Choose Rock Paper Scissor:");
        console.log(playRound(x,computerPlay()));
    }
}






const choice = Array.from(document.querySelectorAll('.choice-img'));


choice.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (playerScore >= 5 || computerScore >= 5) {
            return;
        }
        
        playerChoice = playerSelection(index);
        console.log(playRound(playerChoice,computerPlay()));
        if (playerScore == 5)
    

    })

});





//console.log(playRound("rock",computerPlay()));


//console.log(computerPlay());




//game();