import React, { Component } from "react"

class Result extends Component {

    renderWinner = () => {
        let roundParams = this.props.roundParams

        if (roundParams.roundWinner === 'draw') {
            return <div>IT'S A DRAW!</div>
        } else if (roundParams.roundWinner === 'playerWin') {
            return <div style={{ color: "darkgreen" }}>PLAYER WINS!</div>
        } else if (roundParams.roundWinner === 'computerWin') {
            return <div style={{ color: "firebrick" }}>AI WINS!</div>
        } else {
            return <div></div>
        }
    }

    displayWeaponChoices = (roundResult) => {
        let roundParams = this.props.roundParams
        let playerChoice = roundParams.playerChoice
        let cpuChoice = roundParams.cpuChoice

        let imgSrcPlayer = playerChoice
        let imgSrcComputer = cpuChoice

        if (roundParams.roundWinner === 'playerWin') {
            imgSrcPlayer += '_win.png'
            imgSrcComputer += '_lose.png'
        } else if (roundParams.roundWinner === 'computerWin') {
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
        let renderResult = this.renderWinner()
        let renderWeapons = this.displayWeaponChoices()

        let playerWinCounter = this.props.roundParams.playerWins
        let cpuWinWounter = this.props.roundParams.cpuWins

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