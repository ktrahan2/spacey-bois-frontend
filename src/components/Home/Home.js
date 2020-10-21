import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <section className="starting-menu">
            <div className="menu-placement">
                <div className="menu-options">
                    <Link className="link" to="/newgame">Start New Game</Link>
                    <Link className="link" to="/highscores">High Scores</Link>
                </div>
            </div>
        </section>
    )
}
