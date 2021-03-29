const game = () => {
  let pScore = 0;
  let cScore = 0;

  // start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    // declare the variable hands for shaking images
    const hands = document.querySelectorAll(".hands img");
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //computer options
    const computereOptions = ["rock", "scissors", "paper"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choice
        const computerRandomNumber = Math.floor(Math.random() * 3);
        const computerChoice = computereOptions[computerRandomNumber];
        //sets the hands to rock when shaking everytime
        playerHand.src = `./images/rock.png`;
        computerHand.src = `./images/rock.png`;

        setTimeout(() => {
          //calling the copmareHands function
          compareHands(this.textContent, computerChoice);
          // image update
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 1000);
        //hands animation
        playerHand.style.animation = "shakePlayer 1s ease";
        computerHand.style.animation = "shakeComputer 1s ease";
      });
    });
  };

  //Score update
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //compare hands function
  const compareHands = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };
  // function execution
  startGame();
  playMatch();
};
// execution of the game function
game();
