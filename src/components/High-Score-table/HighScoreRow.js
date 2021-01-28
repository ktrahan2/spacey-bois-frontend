import React from 'react'

const HighScoreRow = ({highscore, index}) => {
    return (
        <tr className="table-rows">
            <td>{index + 1}</td>
            <td>{highscore.username}</td>
            <td>{highscore.score}</td>
            <td>{highscore.ID}</td>
        </tr>
    )
}

export default HighScoreRow
