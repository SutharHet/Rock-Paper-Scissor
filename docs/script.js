/*
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

*/
function computerPlay(){
    let computerMoves = ['ROCK','PAPER','SCISSOR'];
    let rand = Math.floor(Math.random() * 3);
    return computerMoves[rand];
}
/*
let computerCount = 0;
let playerCount = 0;
let tieCount = 0;
let counter = 0;
const cCount = document.getElementById('computercount');
const pCount = document.getElementById('playercount');
const tCount = document.getElementById('tiecount');
const winner = document.getElementById('winner');
cCount.innerHTML = 'Computer : '+computerCount;
pCount.innerHTML = 'You : '+playerCount;
tCount.innerHTML = 'Tie : '+tieCount;
*/
        
const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        function playRound(playerSelection,computerSelection){
            const img1 = document.getElementById('playermove');
            const img2 = document.getElementById('computermove');
            if(playerSelection == 'ROCK'){
                img1.src = 'Images/rock.JPG';
                if(computerSelection == 'ROCK') {
                    //tieCount++;
                    img2.src = "Images/rock.JPG"; 
                    return 'TIE, both Are ROCKS!!';
                }
                if(computerSelection == 'PAPER') {
                    //computerCount++; 
                    img2.src = "Images/paper.JPG";
                    return 'You Lost!!';
                }
                if(computerSelection == 'SCISSOR') {
                    //playerCount++; 
                    img2.src = "Images/scissor.JPG";
                    return 'You Won!!';
                }
            }
            else if(playerSelection == 'PAPER'){
                img1.src = "Images/paper.JPG";
                if(computerSelection == 'ROCK') {
                    //playerCount++; 
                    img2.src = "Images/rock.JPG";
                    return 'You Won!!';
                }
                if(computerSelection == 'PAPER') {
                    //tieCount++; 
                    img2.src = "Images/paper.JPG";
                    return 'TIE, both Are PAPERS!!';
                }
                if(computerSelection == 'SCISSOR') {
                    //computerCount++; 
                    img2.src = "Images/scissor.JPG";
                    return 'You Lost!!';
                }
            }
            else if(playerSelection == 'SCISSOR'){
                img1.src = "Images/scissor.JPG";
                if(computerSelection == 'ROCK') {
                    //computerCount++; 
                    img2.src = "Images/rock.JPG";
                    return 'You Lost!!';
                }
                if(computerSelection == 'PAPER') {
                    //playerCount++;
                    img2.src = "Images/paper.JPG";
                    return 'You Won!!';
                }
                if(computerSelection == 'SCISSOR') {
                    //tieCount++; 
                    img2.src = "Images/scissor.JPG";
                    return 'TIE, both Are SCISSORS!!';
                }
            }
            else{
                return 'Invalid Input!!'
            }
        }
            const playerSelection = button.id.toUpperCase();
            const computerSelection = computerPlay();
            const ans = document.getElementById('ans');
            const answer = playRound(playerSelection,computerSelection);
            ans.innerHTML = 'this round <b>'+answer+'</b>';
    });    
});
