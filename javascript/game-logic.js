let playableOptions = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
let userSelection = '';
let roundsPlayed = 0;

const userOptions = document.querySelectorAll('.user-option');
const scoreUpdate = document.querySelectorAll('.score');

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

//playRound function plays a round then increases the score of the winner
function playRound(computerSelection, userSelection) {
    roundsPlayed++;
    if (computerSelection === userSelection) {
        return console.log(
            'computer selected: ' +
                playableOptions[computerSelection] +
                '. User selected: ' +
                playableOptions[userSelection] +
                ". It's a DRAW! No points"
        );
    } else if ((computerSelection + 1) % 3 == userSelection) {
        userScore++;
        scoreUpdate[1].textContent = 'User Score: ' + userScore;
        return console.log(
            'computer selected: ' +
                playableOptions[computerSelection] +
                '. User selected: ' +
                playableOptions[userSelection] +
                '. User Wins! User gets 1 point'
        );
    } else {
        computerScore++;
        scoreUpdate[0].textContent = 'Computer Score : ' + computerScore;
        return console.log(
            'computer selected: ' +
                playableOptions[computerSelection] +
                '. User selected: ' +
                playableOptions[userSelection] +
                '. Computer Wins! Computer gets 1 point'
        );
    }
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
