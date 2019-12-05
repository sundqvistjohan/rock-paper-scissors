const GameRPS = function() {
  
  GameRPS.computerChoice = () => {
    const min = Math.ceil(1)
    const max = Math.floor(3)
    const computerChoice = Math.floor(Math.random() * (max-min + 1)) + min
  
    switch (computerChoice) {
      case 1:
        return 'rock';
      case 2:
        return 'paper';
      case 3:
        return 'scissors'
    }
  }

  GameRPS.playRound = (playerChoice, cpuChoice) => {

    if ((playerChoice === cpuChoice) && (playerChoice != null)) {
      return 'draw'
    } else {
      return null
    }
  }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameRPS;
}