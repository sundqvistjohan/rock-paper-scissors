import React, { Component } from "react"
import GameRPS from "./GameRPS"

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerWins: 0,
            cpuWins: 0,
        }
    }

    renderWinner = (roundResult) => {
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

    displayWeaponChoices = (roundResult) => {
        let playerChoice = this.props.player
        let cpuChoice = this.props.comp
        let imgSrcPlayer = playerChoice
        let imgSrcComputer = cpuChoice

        if (roundResult === 'playerWin') {
            imgSrcPlayer += '_win.png'
            imgSrcComputer += '_lose.png'
        } else if (roundResult === 'computerWin') {
            imgSrcPlayer += '_lose.png'
            imgSrcComputer += '_win.png'
        } else {
            imgSrcPlayer += '.png'
            imgSrcComputer += '.png'
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
        let roundResult = GameRPS.playRound(this.props.player, this.props.comp)

        let renderResult = this.renderWinner(roundResult)
        let renderWeapons = this.displayWeaponChoices(roundResult)

        let playerWinCounter = this.state.playerWins
        let cpuWinWounter = this.state.cpuWins

        return (
            <>
                <div className="row">
                    <div className="centered column">
                        <div className="ui header player-wincounter">
                            PLAYER <br></br>
                            {playerWinCounter}
                        </div>
                    </div>
                    <div className="centered column">
                        <div className="ui header" id="round-result">
                            {renderResult}

                            {renderWeapons}
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui header computer-wincounter">
                            AI <br></br>
                            {cpuWinWounter}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Result