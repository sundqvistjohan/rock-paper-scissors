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
            roundWinner: 'draw',
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
            this.setState({ playerWins: this.state.playerWins + 1 })
        } else if (roundResult === 'computerWin') {
            this.setState({ cpuWins: this.state.cpuWins + 1 })
        }
    }

    render() {
        return (
            <>
                <div className="ui main container">
                    <div className="ui three column centered grid" id="player">
                        <div id="bonkoff-header">PLAYER</div>
                        <Player choice={this.playRound} />
                    </div>
                </div>
                <div className="ui main container">
                    <div className="ui three column grid middle aligned" id={this.state.roundWinner}>
                        <Result roundParams={this.state} />
                    </div>
                </div>
                <div className="ui main container">
                    <div className="ui three column centered grid" id="computer">
                        <div id="bonkoff-header">AI</div>
                        <Player computer={this.playRound} />
                    </div>
                </div>
            </>
        )
    }
}

export default RockPaperScissors