var calRandomChoice = function () {
  var randomChoice = Math.floor(Math.random() * 3 + 1);
  return randomChoice;
};

var gameIcon = function (icon) {
  if (icon == "scissors" || icon == 1 || icon == "reversed scissors")
    return "✂️";
  if (icon == "paper" || icon == 2 || icon == "reversed paper") return "🧻";
  if (icon == "stone" || icon == 3 || icon == "reversed stone") return "🗿";
};

var yourWinCount = 0;
var computerWinCount = 0;
var drawCount = 0;

var currentGameMode = "waiting for username";
var username = " ";

var main = function (input) {
  if (currentGameMode == "waiting for username") {
    username = input;
    var myOutputValue = `Welcome, ${username}! Let's play a game. Enter either scissors, paper or stone.`;
    currentGameMode = "scissors, paper, stone";
    return myOutputValue;
  }
  if (currentGameMode == "scissors, paper, stone") {
    var randomChoice = calRandomChoice();
    console.log(randomChoice);
    console.log(typeof input);
    var playerIcon = gameIcon(input);
    var computerIcon = gameIcon(randomChoice);
    if (
      input !== "scissors" &&
      input !== "paper" &&
      input !== "stone" &&
      input !== "reversed scissors" &&
      input !== "reversed stone" &&
      input !== "reversed paper"
    ) {
      var myOutputValue = `please choose and enter either "scissors", "paper", or "stone".`;
      var statement = "Please enter a valid input.";
    } else {
      if (
        (randomChoice == 1 && input == "scissors") ||
        (randomChoice == 1 && input == "reversed scissors")
      ) {
        var myOutputValue = `It is a draw`;
        drawCount += 1;
      }

      if (
        (randomChoice == 1 && input == "paper") ||
        (randomChoice == 1 && input == "reversed stone")
      ) {
        myOutputValue = `You lose`;
        computerWinCount += 1;
      }

      if (
        (randomChoice == 1 && input == "stone") ||
        (randomChoice == 1 && input == "reversed paper")
      ) {
        var myOutputValue = `You win`;
        yourWinCount += 1;
      }

      if (
        (randomChoice == 2 && input == "paper") ||
        (randomChoice == 2 && input == "reversed paper")
      ) {
        var myOutputValue = `It is a draw`;
        drawCount += 1;
      }

      if (
        (randomChoice == 2 && input == "scissors") ||
        (randomChoice == 2 && input == "reversed stone")
      ) {
        var myOutputValue = `You win`;
        yourWinCount += 1;
      }

      if (
        (randomChoice == 2 && input == "stone") ||
        (randomChoice == 2 && input == "reversed scissors")
      ) {
        var myOutputValue = `You lose`;
        computerWinCount += 1;
      }

      if (
        (randomChoice == 3 && input == "stone") ||
        (randomChoice == 3 && input == "reversed stone")
      ) {
        var myOutputValue = `It is a draw`;
        drawCount += 1;
      }

      if (
        (randomChoice == 3 && input == "scissors") ||
        (randomChoice == 3 && input == "reversed paper")
      ) {
        var myOutputValue = `You lose`;
        computerWinCount += 1;
      }

      if (
        (randomChoice == 3 && input == "paper") ||
        (randomChoice == 3 && input == "reversed scissors")
      ) {
        var myOutputValue = `You win`;
        yourWinCount += 1;
      }
      var statement = `You chose ${playerIcon} <br> Computer chose ${computerIcon}`;
    }
    var winLossRecord = `Your current score: ${yourWinCount} <br> Computer current score: ${computerWinCount} <br> Draw number of times: ${drawCount}`;

    return (
      "Hey " +
      username +
      ". <br>" +
      statement +
      "<br>" +
      myOutputValue +
      "<br>" +
      winLossRecord
    );
  }
};
