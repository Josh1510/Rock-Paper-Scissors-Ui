let playableOptions = ["Rock", "Paper", "Scissors"];
      let userScore = 0;
      let computerScore = 0;

      // computerPlay function will randomly select then return "Rock", "Paper", or "Scissors"
      function computerSelection() {
        let computerChoice =
          playableOptions[Math.floor(Math.random() * playableOptions.length)];
        return playableOptions.indexOf(computerChoice);
      }

      // userSelection function asks the user for input of either rock paper or scissors which translates to a playable option.
      // entered string is converted to lower case then first letter capitalised
      // then returns index of the option from the playableOptions array
      function userSelection() {
        let userInput = prompt(
          "Please enter your selection. Rock, Paper, or Scissors!"
        );
        userInput = userInput.toLowerCase();
        userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);

        if (playableOptions.indexOf(userInput) == -1) {
          console.log(userInput + " is not a valid option, please try again.");
          userSelection();
        } else {
          return playableOptions.indexOf(userInput);
        }
      }

      //playRound function plays a round then increases the score of the winner
      function playRound(computerSelection, userSelection) {
        if (computerSelection === userSelection) {
          return console.log(
            "computer selected: " +
              playableOptions[computerSelection] +
              ". User selected: " +
              playableOptions[userSelection] +
              ". It's a DRAW! No points"
          );
        } else if ((computerSelection + 1) % 3 == userSelection) {
          userScore++;
          return console.log(
            "computer selected: " +
              playableOptions[computerSelection] +
              ". User selected: " +
              playableOptions[userSelection] +
              ". User Wins! User gets 1 point"
          );
        } else {
          computerScore++;
          return console.log(
            "computer selected: " +
              playableOptions[computerSelection] +
              ". User selected: " +
              playableOptions[userSelection] +
              ". Computer Wins! Computer gets 1 point"
          );
        }
      }

      //This function loops 5 times to play a best of 5, prints the score at the end of each round then
      //declares a winner
      function game() {
        console.log("Best of 5!");

        for (i = 0; i < 5; i++) {
          playRound(computerSelection(), userSelection());
          console.log(
            "Computer has: " +
              computerScore +
              " points. User has: " +
              userScore +
              "."
          );
        }
        console.log("Game over!");
        if (computerScore === userScore) {
          console.log(
            "It's a DRAW! Both players have " + computerScore + " points."
          );
        } else if (computerScore > userScore) {
          console.log(
            "Computer wins with " +
              computerScore +
              " points! User only had " +
              userScore
          );
        } else {
          console.log(
            "User wins with " +
              userScore +
              " points! Computer only had " +
              computerScore
          );
        }
      }
      game();