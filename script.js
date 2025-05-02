// Set rounds to play
// Defining a value to the hand
const choices = [rock,paper,scissors];

// ScoreTracking
let playerWin = 0;
let computerWin = 0;
let rounds 

function decide() {
    rounds = parseInt(prompt("How many rounds would you like to play? "));
    if (isNaN(rounds) || rounds <0) {
        alert("Very funny... now write an actual number, not in letters...")
              decide();
    }
    if (rounds === 0) {
        alert('Awesome, you just lost! Now fuck off');
              }
}

decide();

let computerChoice;
let playerChoice;

function start(rounds) {
    for (i=0;i<rounds;i++) {
        getPlayerChoice();
        getComputerChoice();
        playRound();
    }
    
    if (playerWin === computerWin) {
        return console.log("Seems like it's a tie!");
    }
    
    if (playerWin < computerWin) {
        return console.log("You lost the game, better luck next time");
    }
    else {
        return console.log("You got lucky");
    }
}


// Getting Player's choice
function getPlayerChoice() { 
    let choice = prompt("Pick your hand: ")
    console.log(choice);
    if ((choice.toLowerCase()) === "rock") {
        console.log("You picked Rock")
    }
    if ((choice.toLowerCase()) === "paper") {
        console.log("You picked Paper")
    }
    if ((choice.toLowerCase()) === "scissors") {
        console.log("You picked Scissors")
    }
    else {
        console.log("Are you sure you spelled that right? It's Rock, Paper or Scissors");
        return getPlayerChoice();
    }
}

// getting pc's choice
function getComputerChoice() {
    let n = getRandomInt(3)
    if (n<1) {
        computerChoice = 'rock';
        console.log("The pc chose Rock");
    }
    if (n>1) {
        computerChoice = 'scissors';
        console.log("The pc chose Scissors");
    }
    else {
        computerChoice = 'paper';
        console.log("The pc chose Paper");
    }
}

// Round's flow and results
function playRound() {

    if (playerChoice === computerChoice) {
        return toTie();
    }

    // if they picked Rock
    if ((playerChoice === rock) && (computerChoice === paper)) {
        console.log(`you chose ${playerChoice} and the PC chose ${computerChoice}`);
        return toLose();
    }
    if ((playerChoice === rock) && (computerChoice === scissors)) {
        console.log(`you chose ${playerChoice} and the PC chose ${computerChoice}`);
        return toWin();
    }
    // if they picked Paper
    if ((playerChoice === paper) && (computerChoice === scissors)) {
        console.log(`you chose ${playerChoice} and the PC chose ${computerChoice}`);return toLose();
    }
    if ((playerChoice === paper) && (computerChoice === rock)) {
        console.log(`you chose ${playerChoice} and the PC chose ${computerChoice}`);return toWin();
    }
    
    // if they picked Scissors
    if ((playerChoice === scissors) && (computerChoice === rock)) {
        console.log(`you chose ${playerChoice} and the PC chose ${computerChoice}`);return toLose();
    }
    if ((playerChoice === scissors) && (computerChoice === paper)) {
        console.log(`you chose ${playerChoice} and the PC chose ${computerChoice}`);return toWin();
    }
    
}

function toLose() {
    computerWin += 1;
    return console.log("You lost");
}

function toWin() {
    playerWin += 1;
    return console.log("You won!");
}

function toTie() {
    return console.log("It's a tie!");
}


// random value math
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
// Chose how many rounds to play
start(rounds);
