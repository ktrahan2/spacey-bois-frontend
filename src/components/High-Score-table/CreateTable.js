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
            <div>
                <header>
                    <Link to="/">Home Menu</Link>
                </header>
                <main className="high-score-table-container">
                    <HighScoresTable highscores={this.state.highscores}/>
                </main>
            </div>
        )
    }
}
