import React, { Component } from "react"
import rock from "./img/rock.png"
import paper from "./img/paper.png"
import scissors from "./img/scissors.png"

class Player extends Component {
    render() {
        return (
            <div className="row">
                <div className="column right aligned" id="weapon" >
                    <img src={rock} className="weapon-image rock" alt="rock" onClick={() => {!this.props.computer && this.props.choice('rock')}}/>
                    <p style={{paddingRight: '20px' }}>ROCK</p>
                </div>
                <div className="column middle aligned" id="weapon">
                    <img src={paper} className="weapon-image paper" alt="paper" onClick={() => {!this.props.computer &&this.props.choice('paper')}} />
                    <p>PAPER</p>
                </div>
                <div className="column left aligned" id="weapon">
                    <img src={scissors} className="weapon-image scissors" alt="scissors" onClick={() => {!this.props.computer && this.props.choice('scissors')}} />
                    <p>SCISSORS</p>
                </div>
            </div>
        )
    }
}

export default Player