import React from "react"
import rock_win from "./img/rock_win.png"
import rock_lose from "./img/rock_lose.png"
import paper_win from "./img/paper_win.png"
import paper_lose from "./img/paper_lose.png"
import scissors_win from "./img/scissors_win.png"
import scissors_lose from "./img/scissors_lose.png"

const Landing = () => {
    return (
        <div className='ui main container'>
            <div className="landing header">
                ROCK<br></br> PAPER<br></br> SCISSORS
                </div>
            <div className="ui three column centered grid" id="landing-rules">
                <div className="row">
                    <p>The classic game. <br></br>Can you beat our AI?</p>
                </div>
                <h2>RULES</h2>
                <div className="row" id="rules">
                    <div className="right aligned column">
                        <p>Rock crushes scissors</p>
                        <img src={rock_win} alt="rock" className="weapon-image" /><br></br>
                        <img src={scissors_lose} alt="scissors" className="weapon-image" />
                    </div>
                    <div className="center aligned column">
                        <p>Paper covers rock</p>
                        <img src={paper_win} alt="paper" className="weapon-image" /><br></br>
                        <img src={rock_lose} alt="rock" className="weapon-image" />
                    </div>
                    <div className="left aligned column">
                        <p>Scissors cuts paper</p>
                        <img src={scissors_win} alt="scissors" className="weapon-image" /><br></br>
                        <img src={paper_lose} alt="paper" className="weapon-image" />
                    </div>
                </div>
            </div>
            <div className="ui buttons">
                <a className="ui massive basic black button" id="play-button" href="/rockpaperscissors">PLAY</a>
            </div>
        </div>
    )
}

export default Landing