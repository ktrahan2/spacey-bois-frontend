import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HighScoresTable from './HighScoresTable'
export default class CreateTable extends Component {

    state = {
        highscores: []
    }

    componentDidMount() {
        fetch('http://localhost:7000/highscores')
        .then(response => response.json())
        .then(highscores => this.setState({highscores}))
    }

    render() {
        return (
            <div className="high-score-menu">
                <header className="high-score-table-header">
                    <Link className="link" to="/">Home Menu</Link>
                </header>
                <main className="high-score-table-container">
                    <h1 id="leader-board-header">Spacey Bois Leader Board</h1>
                    <HighScoresTable highscores={this.state.highscores}/>
                </main>
            </div>
        )
    }
}
