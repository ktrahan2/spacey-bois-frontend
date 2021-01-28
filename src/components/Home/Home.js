import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <section className="starting-menu">
            <div className="menu-placement">
                <div className="menu-options">
                    <Link className="link" to="/warp">Start New Game</Link>
                    <Link className="link" to="/highscores">High Scores</Link>
                </div>
            </div>
        </section>
    )
}

export default Home
