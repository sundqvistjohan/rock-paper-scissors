import React from "react"
import rock from "./img/rock.png"

const Landing = () => {
    return (
        <div className='ui main container'>
            {/* <img src={rock} width="200px"/> */}
            <div className="landing header">
                ROCK<br></br> PAPER<br></br> SCISSORS
                </div>
            <div id="landing-rules">
                <p>The classic game. <br></br>Can you beat our AI?</p>

                <h4><u>RULES</u></h4>
                1. Rock beats scissors<br></br>
                2. Paper beats rock<br></br>
                3. Scissors beats paper<br></br>
            </div>
            <div className="link">
                <a href="/rps">PLAY</a>
            </div>
        </div>
    )
}

export default Landing