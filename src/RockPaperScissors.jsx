import React, { Component } from "react";
import GameRPS from "./GameRPS"
import Player from "./Player"
import Result from "./Result"

class RockPaperScissors extends Component {
    constructor() {
        super();
        new GameRPS()
        this.state = {
            playerChoice: null,
            cpuChoice: null,
            roundWinner: null,
            playerWins: 0,
            cpuWins: 0,
        }
    }

    playRound = (choice) => {
        let computerChoice = GameRPS.computerChoice()
        let roundResult = GameRPS.playRound(choice, computerChoice)
        
        this.increaseCounter(roundResult)

        this.setState({ 
            playerChoice: choice,
            cpuChoice: computerChoice,
            roundWinner: roundResult
        }) 
    }

    increaseCounter(roundResult) {
        if (roundResult === 'playerWin') {
            this.setState({ playerWins: this.state.playerWins + 1})
        } else if (roundResult === 'computerWin') {
            this.setState({ cpuWins: this.state.cpuWins + 1})
        }
    }

    render() {
        return (
            <div className="ui main container">
                <div className="ui three column grid">
                    <Player choice={this.playRound} />
                    <Result roundParams={this.state} />
                </div>
            </div>
        )
    }
}

export default RockPaperScissors