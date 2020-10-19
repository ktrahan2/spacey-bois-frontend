import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div className="starting-menu">
            <Link to="/newgame">Start New Game</Link>
            <Link to="/highscores">High Scores</Link>
        </div>
    )
}
