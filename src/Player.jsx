import React, { Component } from "react"
import rock from "./img/rock.png"
import paper from "./img/paper.png"
import scissors from "./img/scissors.png"

class Player extends Component {
    render() {
        return (
            <div className="row">
                <div className="column right aligned" id="weapon">
                    <img src={rock} class="weapon-image rock" onClick={() => this.props.choice('rock')} />
                    <p>ROCK</p>
                </div>
                <div className="column" id="weapon">
                    <img src={paper} class="weapon-image paper" onClick={() => this.props.choice('paper')} />
                    <p>PAPER</p>
                </div>
                <div className="column left aligned" id="weapon">
                    <img src={scissors} class="weapon-image" onClick={() => this.props.choice('scissors')} />
                    <p>SCISSORS</p>
                </div>
            </div>
        )
    }
}

export default Player