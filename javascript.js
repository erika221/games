
playGame();

// play 5 times //
function playGame(){
    // track scores //
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++){
    playRound();
}
if(humanScore > computerScore){
    console.log('CONGRATULATIONS! YOU ARE THE WINNER!');
} else if (humanScore < computerScore){
    console.log('Sorry you lost, maybe next time!');
} else {
    console.log('You draw! Wanna play again?');
}

// single round, who win? //
function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let result;
    switch (true){
        case (humanChoice === computerChoice):
          result = 'draw';
          break;

        case (humanChoice == 'rock' && computerChoice == 'paper'):
          result = 'lose';
          break;

        case (humanChoice == 'rock' && computerChoice == 'scissors'):
            result = 'win';
            break;

        case (humanChoice == 'paper' && computerChoice == 'rock'):
            result = 'win';
            break;

        case (humanChoice == 'paper' && computerChoice == 'scissors'):
          result = 'lose';
          break;

        case (humanChoice == 'scissors' && computerChoice == 'rock'):
          result = 'lose';
          break;

        case (humanChoice == 'scissors' && computerChoice == 'paper'):
          result = 'win';
          break;

        default:
            console.log(`error - computer choice = ${computerChoice} - human choice = ${humanChoice}`);
    } 

    // show who won & count score in one round//
    const modHumanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    const modComputerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    if(result=='win'){
        console.log(`You win! ${modHumanChoice} beats ${modComputerChoice}.`);
        humanScore = humanScore + 1;
    } else if(result=='lose'){
        console.log(`You lose! ${modComputerChoice} beats ${modHumanChoice}.`);
        computerScore = computerScore + 1;
    } else {
        console.log(`You draw! Play again.`);
    }
}

}





    


// computer choose rock, paper or scissors //
function getComputerChoice() {
    let n1 = Math.random();
    n1 = n1* 3;
    n1 = Math.floor(n1);

    let computerChoice;
    if (n1 === 0){
        computerChoice = "rock";
    } else if (n1 ===1){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    // console.log(computerChoice);
    return computerChoice;
}



//  user choose rock, paper or scissors //
function getHumanChoice(){
    let humanCho = prompt("Make your Choice: rock, paper or scissors");
    let humanChoice = humanCho.toLowerCase();
    if(humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors'){
       // console.log(humanChoice);
       return humanChoice;
    } else {
        alert('Invalid entry, please retry');
        return (getHumanChoice());
    }
}

//  user choose rock, paper or scissors using the while loop //
// function getHumanChoice() {
//     let humanChoice;
//     while (!(humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors')) {
//         humanChoice = prompt("Make your Choice: rock, paper or scissors").toLowerCase();
//     }
//     return humanChoice;
// }













