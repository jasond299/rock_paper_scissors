function computerPlay(){
    let x = Math.floor(Math.random() * 3);

    if (x == 0)
        return "Rock";
    if (x == 1)
        return "Scissors";
    if (x == 2)
        return "Paper";
}

function playRound(playerSelection,computerSelection){
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase())
        return "Draw";
    
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS")
        return "You Win! Rock beats Scissors";
    
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER")
        return "You Lose! Paper beats Rock";
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER")
        return "You Win! Scissors beats Paper";
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK")
        return "You Lose! Rock beats Scissors";
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS")
        return "You Lose! Scissors beats Paper";
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")
        return "You Win! Paper beats Rock";
}

function game(){
    for (let i=0; i<5; i++){
        let x = prompt("Choose Rock Paper Scissor:");
        console.log(playRound(x,computerPlay()));
    }
}




const test = document.querySelector('.sub');
test.textContent = "hello";
//console.log(playRound("rock",computerPlay()));

//console.log(computerPlay());

//game();