import React, { Component } from "react";
import GameRPS from "./GameRPS"
import Player from "./Player"
import rock from "./img/rock.png"
import paper from "./img/paper.png"
import scissors from "./img/scissors.png"

class RockPaperScissors extends Component {
    constructor() {
        super();
        new GameRPS()
        this.state = {
            playerChoice: null,
            cpuChoice: null,
            playerWins: 0,
            cpuWins: 0,
            roundWinner: null,
        }
    }

    playerSelection = (choice) => {
        this.setState({ playerChoice: choice })
        this.setState({ cpuChoice: GameRPS.computerChoice() })
    }

    playRound = () => {
        let roundResult = GameRPS.playRound(this.state.playerChoice, this.state.cpuChoice)
        this.setState({ roundWinner: roundResult })
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

    displayWeaponChoices = () => {
        let playerChoice = this.state.playerChoice
        let cpuChoice = this.state.cpuChoice
        let imgSrcPlayer, imgSrcComputer

        if (this.state.roundWinner === 'playerWin') {
            imgSrcPlayer = playerChoice + '_win.png'
            imgSrcComputer = cpuChoice + '_lose.png'
        } else {
            imgSrcPlayer = playerChoice + '_lose.png'
            imgSrcComputer = cpuChoice + '_win.png'
        }

        if (playerChoice != null) {
            return (
                <>
                    <div id="player-choice">You chose {playerChoice}</div>
                    <img src={require('./img/' + imgSrcPlayer)} alt="playerweapon" width="60px" />
                    <div></div>
                    <img src={require('./img/' + imgSrcComputer)} alt="computerweapon" width="60px" />
                    <div id="computer-choice">AI chose {cpuChoice}</div>
                </>
            )
        }
    }

    render() {
        let renderWeapons = this.displayWeaponChoices()
        let playerWinCounter = this.state.playerWins
        let cpuWinWounter = this.state.cpuWins
        return (
            <div class="ui main container">
                <div className="ui three column grid">
                    <Player choice={this.playerSelection} />

                    <div className="row">
                        <div className="centered column">
                            <div className="ui header player-wincounter">
                                PLAYER <br></br>
                                {playerWinCounter}
                            </div>
                        </div>
                        <div className="centered column">
                            <div className="ui header" id="round-result">
                                {renderWeapons}<br></br>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui header computer-wincounter">
                                AI <br></br>
                                {cpuWinWounter}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RockPaperScissors