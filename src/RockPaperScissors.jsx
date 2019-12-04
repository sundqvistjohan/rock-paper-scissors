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

    playerSelection = (choice) => {
        this.setState({ playerChoice: choice })
    }

    displayPlayerChoice = () => {
        let playerChoice = this.state.playerChoice
        if (playerChoice != null) {
            console.log(this.state.playerChoice)
            return <div id="player-choice">You chose {playerChoice}</div>
        }
    }



    render() {
        let renderPlayerChoice = this.displayPlayerChoice()
        return (
            <>
                <div>
                    <button id="rock-button" onClick={() => this.playerSelection('rock')}>Rock</button>
                    <button id="paper-button" onClick={() => this.playerSelection('paper')}>Paper</button>
                    <button id="scissors-button" onClick={() => this.playerSelection('scissors')}>Scissors</button>
                </div>

                <div id="round-info">
                    {renderPlayerChoice}

                </div>

            </>
        )
    }
}

export default RockPaperScissors