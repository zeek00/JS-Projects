let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor(Math.random()* 10);
}

const compareGuesses = (userGuess, computerGuess, secret) =>{
    let userDiff = Math.abs(userGuess - secret);
    let computerDiff = Math.abs(computerGuess - secret);
    if(userGuess > 9){
        alert('The number range is between 0 - 9 try again');
    }else if(userDiff === computerDiff){
        return true;
    }else if(userDiff>computerDiff){
        return false;
    }else if(computerDiff > userDiff){
        return true;
    }
}

const updateScore = winner =>{
    switch(winner){
        case 'human':
            humanScore+=1;
        break;
        case 'computer':
            computerScore+=1;;
        break;
    }
    
}
const advanceRound = () =>currentRoundNumber+=1;

