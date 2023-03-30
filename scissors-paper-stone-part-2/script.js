var calRandomChoice = function () {
  var randomChoice = Math.floor(Math.random() * 3 + 1);
  return randomChoice;
};

var gameIcon = function (icon) {
  if (icon == "scissors" || icon == 1) return "✂️";
  if (icon == "paper" || icon == 2) return "🧻";
  if (icon == "stone" || icon == 3) return "🗿";
};

var yourWinCount = 0;
var computerWinCount = 0;
var drawCount = 0;
var kVersionPlayerCount = 0;
var kVersionComputerCount = 0;

var currentGameMode = "waiting for username";
var username = " ";

var main = function (input) {
  if (currentGameMode == "waiting for username") {
    username = input;
    var myOutputValue = `Welcome, ${username}! Let's play a game. <br>Current game mode: is "normal mode". <br>For reverse mode, enter "reverse mode". <br>For korean mode, enter " korean mode". <br>Otherwise to start, please enter either scissors, paper or stone.`;
    currentGameMode = "normal mode";
    return myOutputValue;
  }
  if (currentGameMode == "normal mode") {
    var randomChoice = calRandomChoice();
    console.log(randomChoice);
    console.log(typeof input);
    var playerIcon = gameIcon(input);
    var computerIcon = gameIcon(randomChoice);
    if (
      input !== "scissors" &&
      input !== "paper" &&
      input !== "stone" &&
      input !== "reverse mode" &&
      input !== "korean mode"
    ) {
      var myOutputValue = `Please choose and enter either "scissors", "paper", or "stone".`;
      var statement = "Please enter a valid input.";
    } else if (input == "reverse mode") {
      currentGameMode = "reverse mode";
      myOutputValue = `You have chosen reverse mode. please choose and enter either "scissors", "paper", or "stone".`;
      return myOutputValue;
    } else if (input == "korean mode") {
      currentGameMode = "korean mode";
      myOutputValue = `You have chosen to play muk-jji-ppa. please choose and enter either "scissors", "paper", or "stone". <br>Rules: You need to win the first round and tie on the second to be the ultimate winner. `;
      return myOutputValue;
    } else {
      if (randomChoice == 1 && input == "scissors") {
        var myOutputValue = `It is a draw`;
        drawCount += 1;
      }

      if (randomChoice == 1 && input == "paper") {
        myOutputValue = `You lose`;
        computerWinCount += 1;
      }

      if (randomChoice == 1 && input == "stone") {
        var myOutputValue = `You win`;
        yourWinCount += 1;
      }

      if (randomChoice == 2 && input == "paper") {
        var myOutputValue = `It is a draw`;
        drawCount += 1;
      }

      if (randomChoice == 2 && input == "scissors") {
        var myOutputValue = `You win`;
        yourWinCount += 1;
      }

      if (randomChoice == 2 && input == "stone") {
        var myOutputValue = `You lose`;
        computerWinCount += 1;
      }

      if (randomChoice == 3 && input == "stone") {
        var myOutputValue = `It is a draw`;
        drawCount += 1;
      }

      if (randomChoice == 3 && input == "scissors") {
        var myOutputValue = `You lose`;
        computerWinCount += 1;
      }

      if (randomChoice == 3 && input == "paper") {
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
  if (currentGameMode == "reverse mode") {
    var randomChoice = calRandomChoice();
    console.log(randomChoice);
    console.log(typeof input);
    var playerIcon = gameIcon(input);
    var computerIcon = gameIcon(randomChoice);
    if (
      input !== "scissors" &&
      input !== "paper" &&
      input !== "stone" &&
      input !== "normal mode" &&
      input !== "korean mode"
    ) {
      var myOutputValue = `Please choose and enter either "scissors", "paper", or "stone".`;
      var statement = `Please enter a valid input.`;
    } else if (input == "normal mode") {
      currentGameMode = "normal mode";
      myOutputValue = `You have chosen normal mode. please choose and enter either "scissors", "paper", or "stone".`;
      return myOutputValue;
    } else if (input == "korean mode") {
      currentGameMode = "korean mode";
      myOutputValue = `You have chosen to play muk-jji-ppa. please choose and enter either "scissors", "paper", or "stone". <br>Rules: You need to win the first round and tie on the second to be the ultimate winner. `;
      return myOutputValue;
    } else {
      if (randomChoice == 1 && input == "scissors") {
        var myOutputValue = `It is a draw`;
        drawCount += 1;
      }

      if (randomChoice == 1 && input == "paper") {
        myOutputValue = `You win`;
        yourWinCount += 1;
      }

      if (randomChoice == 1 && input == "stone") {
        var myOutputValue = `You lose`;
        computerWinCount += 1;
      }

      if (randomChoice == 2 && input == "paper") {
        var myOutputValue = `It is a draw`;
        drawCount += 1;
      }

      if (randomChoice == 2 && input == "scissors") {
        var myOutputValue = `You lose`;
        computerWinCount += 1;
      }

      if (randomChoice == 2 && input == "stone") {
        var myOutputValue = `You win`;
        yourWinCount += 1;
      }

      if (randomChoice == 3 && input == "stone") {
        var myOutputValue = `It is a draw`;
        drawCount += 1;
      }

      if (randomChoice == 3 && input == "scissors") {
        var myOutputValue = `You win`;
        yourWinCount += 1;
      }

      if (randomChoice == 3 && input == "paper") {
        var myOutputValue = `You lose`;
        computerWinCount += 1;
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
  if (currentGameMode == "korean mode") {
    var randomChoice = calRandomChoice();
    console.log(randomChoice);
    console.log(typeof input);
    var playerIcon = gameIcon(input);
    var computerIcon = gameIcon(randomChoice);
    if (
      input !== "scissors" &&
      input !== "paper" &&
      input !== "stone" &&
      input !== "reverse mode" &&
      input !== "normal mode"
    ) {
      var myOutputValue = `Please choose and enter either "scissors", "paper", or "stone".`;
      var statement = `Please enter a valid input.`;
    } else if (input == "reverse mode") {
      currentGameMode = "reverse mode";
      myOutputValue = `You have chosen reverse mode. please choose and enter either "scissors", "paper", or "stone".`;
      return myOutputValue;
    } else if (input == "normal mode") {
      currentGameMode = "normal mode";
      myOutputValue = `You have chosen normal mode. please choose and enter either "scissors", "paper", or "stone".`;
      return myOutputValue;
    } else {
      if (randomChoice == 1 && input == "scissors") {
        var myOutputValue = `It is a draw`;
        if (kVersionComputerCount == 1) {
          kVersionComputerCount += 1;
        }
        if (kVersionPlayerCount == 1) {
          kVersionPlayerCount += 1;
        }
      }

      if (randomChoice == 1 && input == "paper") {
        myOutputValue = `You lose`;
        kVersionComputerCount += 1;
        kVersionPlayerCount = 0;
      }

      if (randomChoice == 1 && input == "stone") {
        var myOutputValue = `You win`;
        kVersionPlayerCount += 1;
        kVersionComputerCount = 0;
      }

      if (randomChoice == 2 && input == "paper") {
        var myOutputValue = `It is a draw`;
        if (kVersionComputerCount == 1) {
          kVersionComputerCount += 1;
        }
        if (kVersionPlayerCount == 1) {
          kVersionPlayerCount += 1;
        }
      }

      if (randomChoice == 2 && input == "scissors") {
        var myOutputValue = `You win`;
        kVersionPlayerCount += 1;
        kVersionComputerCount = 0;
      }

      if (randomChoice == 2 && input == "stone") {
        var myOutputValue = `You lose`;
        kVersionComputerCount += 1;
        kVersionPlayerCount = 0;
      }

      if (randomChoice == 3 && input == "stone") {
        var myOutputValue = `It is a draw`;
        if (kVersionComputerCount == 1) {
          kVersionComputerCount += 1;
        }
        if (kVersionPlayerCount == 1) {
          kVersionPlayerCount += 1;
        }
      }

      if (randomChoice == 3 && input == "scissors") {
        var myOutputValue = `You lose`;
        kVersionComputerCount += 1;
        kVersionPlayerCount = 0;
      }

      if (randomChoice == 3 && input == "paper") {
        var myOutputValue = `You win`;
        kVersionComputerCount += 1;
        kVersionPlayerCount = 0;
      }
      var statement = `You chose ${playerIcon} <br> Computer chose ${computerIcon}`;
    }
    if (kVersionPlayerCount == 0 && kVersionComputerCount == 0) {
      var kRecord = `There are no winners currently.`;
    }
    if (kVersionPlayerCount == 1) {
      var kRecord = `Muk-jji-ppa!!! You are the most recent winner.`;
    }
    if (kVersionComputerCount == 1) {
      var kRecord = `Muk-jji-ppa!!! Computer is the most recent winner.`;
    }
    if (kVersionComputerCount == 2) {
      var kRecord = `Muk-jji-ppa!!! Computer is the most ultimate winner.`;
      kVersionComputerCount = 0;
    }
    if (kVersionPlayerCount == 2) {
      var kRecord = `Muk-jji-ppa!!! You are the most ultimate winner.`;
      kVersionPlayerCount = 0;
    }

    return (
      "Hey " +
      username +
      ". <br>" +
      statement +
      "<br>" +
      myOutputValue +
      "<br>" +
      kRecord
    );
  }
};
