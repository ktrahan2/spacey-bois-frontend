import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const CharacterSelection = () => {

    //change this to be a list of the characters already created and then an option to create a new character. 
    //completely revamp the look etc. go for more like the hud.
    const user = useSelector(state => state.user)

    return (
        <section className="starting-menu">
            <div className="menu-placement">
                <div className="menu-options">
                    <Link className="link" to="/warp">Start New Game</Link>
                    {/* change to select from list of characters available */}
                    <Link className="link" to="/highscores">High Scores</Link>
                </div>
            </div>
        </section>
    )
}

export default CharacterSelection