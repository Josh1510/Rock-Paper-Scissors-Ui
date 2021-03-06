let playableOptions = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
let userSelection = '';
let roundsPlayed = 0;

let newPara = document.createElement('p');

const userOptions = document.querySelectorAll('.user-option');
const scoreUpdate = document.querySelectorAll('.score');
const resultsUpdate = document.querySelectorAll('.result');

userOptions.forEach((button) => {
    button.addEventListener('click', (event) => {
        userSelection = event.target.id;
        userSelection = playableOptions.indexOf(userSelection);
        console.log(userSelection);

        playRound(computerSelection(), userSelection);

        if (roundsPlayed === 5) {
            checkWinner();
        }
    });
});

// computerPlay function will randomly select then return "Rock", "Paper", or "Scissors"
function computerSelection() {
    let computerChoice = playableOptions[Math.floor(Math.random() * playableOptions.length)];
    return playableOptions.indexOf(computerChoice);
}

function printResults(results) {
    var para = document.createElement('p');
    var node = document.createTextNode(results);
    para.append(node);
    resultsUpdate[0] = resultsUpdate[0].appendChild(para);
}

//playRound function plays a round then increases the score of the winner
function playRound(computerSelection, userSelection) {
    if (computerSelection === userSelection) {
        resultsUpdate[0].textContent = 'Results: draw';

        printResults('draw');
        // var para = document.createElement('p');
        // var node = document.createTextNode('was a draw.');
        // para.append(node);
        // resultsUpdate[0].append(para);
    } else if ((computerSelection + 1) % 3 == userSelection) {
        userScore++;
        scoreUpdate[1].textContent = 'User Score: ' + userScore;
        resultsUpdate[0].textContent = 'Results: userwin';

        printResults('user wins');
        // var para = document.createElement('p');
        // var node = document.createTextNode('user wins');
        // para.append(node);
        // resultsUpdate[0].append(para);
    } else {
        computerScore++;
        scoreUpdate[0].textContent = 'Computer Score: ' + computerScore;
        resultsUpdate[0].textContent = 'Results: computerwin';

        printResults('computer wins');
        // var para = document.createElement('p');
        // var node = document.createTextNode('computer wins.');
        // para.append(node);
        // resultsUpdate[0].append(para);
    }
    roundsPlayed++;
}

//This function loops 5 times to play a best of 5, prints the score at the end of each round then
//declares a winner
function checkWinner() {
    // const gameLength = 5;
    // for (i = 0; i < gameLength; i++) {
    //     playRound(computerSelection(), userSelection());
    //     console.log('Computer has: ' + computerScore + ' points. User has: ' + userScore + '.');
    // }
    console.log('Game over!');
    if (computerScore === userScore) {
        console.log("It's a DRAW! Both players have " + computerScore + ' points.');
    } else if (computerScore > userScore) {
        console.log('Computer wins with ' + computerScore + ' points! User only had ' + userScore);
    } else {
        console.log('User wins with ' + userScore + ' points! Computer only had ' + computerScore);
    }
}

//This function adds a new line for the results
function addResults(winner) {
    let para = document.createElement('p');
    let node = document.createTextNode(winner);
    para.appendChild(node);
}
