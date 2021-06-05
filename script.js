function computerPlay(){
    let computerMoves = ['ROCK','PAPER','SCISSOR'];
    let rand = Math.floor(Math.random() * 3);
    return computerMoves[rand];
}
function playRound(playerSelection,computerSelection){
    if(playerSelection == 'ROCK'){
        if(computerSelection == 'ROCK') return 'TIE, both are ROCKS!!';
        if(computerSelection == 'PAPER') return 'You Lost!!';
        if(computerSelection == 'SCISSOR') return 'You Won!!';
    }
    else if(playerSelection == 'PAPER'){
        if(computerSelection == 'ROCK') return 'You Won!!';
        if(computerSelection == 'PAPER') return 'TIE, both are PAPERS!!';
        if(computerSelection == 'SCISSOR') return 'You Lost!!';
    }
    else if(playerSelection == 'SCISSOR'){
        if(computerSelection == 'ROCK') return 'You Lost!!';
        if(computerSelection == 'PAPER') return 'You Won!!';
        if(computerSelection == 'SCISSOR') return 'TIE, both Are SCISSORS!!';
    }
    else{
        return 'Invalid Input!!'
    }
}

const playerSelection = prompt('Enter Your Move').toUpperCase();
const computerSelection = computerPlay();
console.log('You played:'+playerSelection+', Computer played:'+computerSelection);
console.log(playRound(playerSelection,computerSelection));