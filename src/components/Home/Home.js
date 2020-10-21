import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <body className="starting-menu">
            <div className="menu-options">
                <Link className="link" to="/newgame">Start New Game</Link>
                <Link className="link" to="/highscores">High Scores</Link>
            </div>
        </body>
    )
}
