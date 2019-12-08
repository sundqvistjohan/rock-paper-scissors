import React from "react"
import { NavLink, Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className='ui secondary menu'>
            <div className='ui container'>
                <Link className="ui item" to ='/'>ROCK PAPER SCISSORS</Link>
                <div className="right menu">
                    <Link id="reset" onClick={() => window.location.reload()} className="ui item" to='/'>RESET GAME</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header