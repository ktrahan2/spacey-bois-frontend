import React from 'react'
import HighScoreRow from './HighScoreRow.js'

export default function HighScores({highscores}) {

    highscores = highscores.sort((a,b) => b.score - a.score).slice(0, 10)
    
    let createHighScoreRow = highscores.map((highscore, index) => {
        if (highscore.username !== "" && highscore.score !== 0) {
            return (
                <HighScoreRow 
                    key={index} 
                    highscore={highscore}
                    index={index}
                />
            )
        }

    })
    
    return (
        <table className="high-scores-table">
                <tbody>
                <tr className="table-headers">
                    <th>Position</th>
                    <th>Player</th>
                    <th>Score</th>
                    <th>Game ID</th>
                </tr>
                {createHighScoreRow}
            </tbody>
        </table>
    )
}
