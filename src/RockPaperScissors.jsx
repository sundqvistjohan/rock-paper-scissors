import React, { Component } from "react";
import GameRPS from "./GameRPS"

class RockPaperScissors extends Component {
    constructor() {
        super();
        new GameRPS
        this.state = {
            playerChoice: null,
            cpuChoice: null,
            gameWinner: null,
            playerWins: 0,
            cpuWins: 0
        }
    }

    playerSelection = (choice) => {
        this.setState({ playerChoice: choice })
        
        this.setState({ cpuChoice: GameRPS.computerChoice()})
    }

    displayPlayerChoice = () => {
        let playerChoice = this.state.playerChoice
        if (playerChoice != null) {
            return <div id="player-choice">You chose {playerChoice}</div>
        }
    }

    displayComputerChoice = () => {
        let cpuChoice = this.state.cpuChoice
        if (cpuChoice != null) {
            return <div id="computer-choice">AI chose {cpuChoice}</div>
        }
    }
 

    render() {
        let renderPlayerChoice = this.displayPlayerChoice() 
        let renderCpuChoice = this.displayComputerChoice()
        return (
            <>
                <div>
                    <button id="rock-button" onClick={() => this.playerSelection('rock')}>Rock</button>
                    <button id="paper-button" onClick={() => this.playerSelection('paper')}>Paper</button>
                    <button id="scissors-button" onClick={() => this.playerSelection('scissors')}>Scissors</button>
                </div>

                <div id="round-info">
                    {renderPlayerChoice}<br></br>
                    {renderCpuChoice}
                </div>
            </>
        )
    }
}

export default RockPaperScissors