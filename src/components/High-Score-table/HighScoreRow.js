import React from 'react'

export default function HighScoreRow({highscore, index}) {
    return (
        <tr className="table-rows">
            <td>{index + 1}</td>
            <td>{highscore.username}</td>
            <td>{highscore.score}</td>
            <td>{highscore.ID}</td>
        </tr>
    )
}
