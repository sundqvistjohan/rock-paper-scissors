import React, { Component } from "react";
import GameRPS from "./GameRPS"
import Player from "./Player"
import rock from "./img/rock.png"
import paper from "./img/paper.png"
import scissors from "./img/scissors.png"

class RockPaperScissors extends Component {
    constructor() {
        super();
        new GameRPS
        this.state = {
            playerChoice: null,
            cpuChoice: null,
            playerWins: 0,
            cpuWins: 0,
        }
    }

    playerSelection = (choice) => {
        this.setState({ playerChoice: choice })
        this.setState({ cpuChoice: GameRPS.computerChoice() })
    }

    playRound = () => {
        let roundResult = GameRPS.playRound(this.state.playerChoice, this.state.cpuChoice)
        if (roundResult === 'draw') {
            return <div>IT'S A DRAW!</div>
        } else if (roundResult === 'playerWin') {
            this.state.playerWins++
            return <div style={{ color: "darkgreen" }}>PLAYER WINS!</div>
        } else if (roundResult === 'computerWin') {
            this.state.cpuWins++
            return <div style={{ color: "firebrick" }}>AI WINS!</div>
        } else {
            return <div></div>
        }
    }

    displayPlayerChoice = () => {
        let playerChoice = this.state.playerChoice
        let img = null
        if (playerChoice === 'rock') {
            img = rock
        } else if (playerChoice === 'paper') {
            img = paper
        } else if (playerChoice === 'scissors') {
            img = scissors
        }

        if (playerChoice != null) {
            return (
                <>
                    <div id="player-choice">You chose {playerChoice}</div>
                    <img src={img} width="60px" />
                </>
            )
        } else {
            return <div></div>
        }
    }

    displayComputerChoice = () => {
        let cpuChoice = this.state.cpuChoice
        let img = null
        if (cpuChoice === 'rock') {
            img = rock
        } else if (cpuChoice === 'paper') {
            img = paper
        } else if (cpuChoice === 'scissors') {
            img = scissors
        }
        if (cpuChoice != null) {
            return (
                <>
                    <img src={img} width="60px" />
                    <div id="computer-choice">AI chose {cpuChoice}</div>
                </>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        let renderResult = this.playRound()
        let renderPlayerChoice = this.displayPlayerChoice()
        let renderCpuChoice = this.displayComputerChoice()
        let playerWinCounter = this.state.playerWins
        let cpuWinWounter = this.state.cpuWins
        return (
            <div class="ui main container">
                <div className="ui three column grid">
                    <Player choice={this.playerSelection} />

                    <div className="row">
                        <div className="centered column">
                            <div id="round-info">
                                {renderPlayerChoice}<br></br>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="centered column">
                            <div className="ui header player-wincounter">
                                PLAYER <br></br>
                                {playerWinCounter}
                            </div>
                        </div>
                        <div className="centered column">
                            <div className="ui header" id="round-result">
                                {renderResult}<br></br>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui header computer-wincounter">
                                AI <br></br>
                                {cpuWinWounter}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="centered column">
                            <div id="round-info">
                                {renderCpuChoice}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RockPaperScissors