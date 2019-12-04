import React, { Component } from "react";

class RockPaperScissors extends Component {
    constructor() {
        super();
        this.state = {
            playerChoice: null,
            cpuChoice: null,
            gameWinner: null,
            playerWins: 0,
            cpuWins: 0
        }
    }
    
    render() {
        return (
            <div>
                <button id="rock-button">Rock</button>
                <button id="paper-button">Paper</button>
                <button id="scissors-button">Scissors</button>
            </div>
            <div id="player-choice"></div>
            <div id="computer-choice"></div>
        )
    }
}

export default RockPaperScissors