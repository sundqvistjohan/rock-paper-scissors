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
        }
    }

    playerSelection = (choice) => {
        this.setState({ playerChoice: choice })
        this.setState({ cpuChoice: GameRPS.computerChoice() })
    }

    render() {
        return (
            <div className="ui main container">
                <div className="ui three column grid">
                    <Player choice={this.playerSelection} />
                    <Result player={this.state.playerChoice} comp={this.state.cpuChoice} />
                </div>
            </div>
        )
    }
}

export default RockPaperScissors