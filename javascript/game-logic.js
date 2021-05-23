// Array to hold the different options
let playableOptions = ['rock', 'paper', 'scissors'];

// Initialising values
let userScore = 0;
let computerScore = 0;
let userSelection = '';
let roundsPlayed = 0;

let resultsArray = [];

// Setting event listeners for game & results
const userOptions = document.querySelectorAll('.user-option');
const scoreUpdate = document.querySelectorAll('.score');

const resultsUpdate = document.querySelectorAll('.result');

const userResults = document.querySelector('#user-results');
const computerResults = document.querySelector('#computer-results');

// adds an event listner on each playable option button then plays a round based using that
// selection. checks for number of rounds to see if winner should be declared
userOptions.forEach((userOptions) => {
    userOptions.addEventListener('click', () => letsGo(userOptions.id), false);
});

function letsGo(userOptions) {
    userSelection = userOptions;
    userSelection = playableOptions.indexOf(userSelection);

    if (roundsPlayed === 5 || userScore === 3 || computerScore === 3) {
        console.log('games over! reset or stop clicking');
    } else {
        playRound(computerSelection(), userSelection);
    }
}

// computerPlay function will randomly select then return "Rock", "Paper", or "Scissors"
function computerSelection() {
    let computerChoice = playableOptions[Math.floor(Math.random() * playableOptions.length)];
    return playableOptions.indexOf(computerChoice);
}

function printResults(userSelection, computerSelection) {
    var userPara = document.createElement('p');
    var userNode = document.createTextNode(userSelection);
    userPara.append(userNode);
    userResults.appendChild(userPara);

    var computerPara = document.createElement('p');
    var computerNode = document.createTextNode(computerSelection);
    computerPara.append(computerNode);
    computerResults.appendChild(computerPara);
}

//playRound function plays a round then increases the score of the winner
function playRound(computerSelection, userSelection) {
    if (computerSelection === userSelection) {
        resultsUpdate[0].textContent = 'Results: draw';

        printResults(playableOptions[userSelection], playableOptions[computerSelection]);
    } else if ((computerSelection + 1) % 3 == userSelection) {
        userScore++;
        scoreUpdate[1].textContent = 'User Score: ' + userScore;
        resultsUpdate[0].textContent = 'Results: userwin';

        printResults(playableOptions[userSelection], playableOptions[computerSelection]);
    } else {
        computerScore++;
        scoreUpdate[0].textContent = 'Computer Score: ' + computerScore;
        resultsUpdate[0].textContent = 'Results: computerwin';

        printResults(playableOptions[userSelection], playableOptions[computerSelection]);
    }
    checkWinner();
    roundsPlayed++;
}

//This function loops 5 times to play a best of 5, prints the score at the end of each round then
//declares a winner
function checkWinner() {
    if (roundsPlayed === 5 || userScore === 3 || computerScore === 3) {
        console.log('Game over!');
        if (computerScore === userScore) {
            console.log("It's a DRAW! Both players have " + computerScore + ' points.');
        } else if (computerScore > userScore) {
            console.log('Computer wins with ' + computerScore + ' points! User only had ' + userScore);
        } else {
            console.log('User wins with ' + userScore + ' points! Computer only had ' + computerScore);
        }
    }
}
