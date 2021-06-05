function game(){
    function computerPlay(){
        let computerMoves = ['ROCK','PAPER','SCISSOR'];
        let rand = Math.floor(Math.random() * 3);
        return computerMoves[rand];
    }
    function playRound(playerSelection,computerSelection){
        if(playerSelection == 'ROCK'){
            if(computerSelection == 'ROCK') {++tieCount; return 'TIE, both Are SCISSORS!!';}
            if(computerSelection == 'PAPER') {++computerCount; return 'You Lost!!';}
            if(computerSelection == 'SCISSOR') {++playerCount; return 'You Won!!';}
        }
        else if(playerSelection == 'PAPER'){
            if(computerSelection == 'ROCK') {++playerCount; return 'You Won!!';}
            if(computerSelection == 'PAPER') {++tieCount; return 'TIE, both Are SCISSORS!!';}
            if(computerSelection == 'SCISSOR') {++computerCount; return 'You Lost!!';}
        }
        else if(playerSelection == 'SCISSOR'){
            if(computerSelection == 'ROCK') {++computerCount; return 'You Lost!!';}
            if(computerSelection == 'PAPER') {++playerCount; return 'You Won!!';}
            if(computerSelection == 'SCISSOR') {++tieCount; return 'TIE, both Are SCISSORS!!';}
        }
        else{
            return 'Invalid Input!!'
        }
    }
    let computerCount = 0;
    let playerCount = 0;
    let tieCount = 0;
    for(let i=0;i<5;i++){    
        const playerSelection = prompt('Enter Your Move').toUpperCase();
        const computerSelection = computerPlay();
        console.log('You played:'+playerSelection+', Computer played:'+computerSelection+'. this round '+playRound(playerSelection,computerSelection));
        console.log();
    }  
    console.log('You won '+playerCount+' time, Computer won '+computerCount+' time. Tie '+tieCount+' time');
    if(playerCount > computerCount){
        console.log('YOU WON!!');
    } else {
        console.log('YOU LOST!!');
    }
}

game();