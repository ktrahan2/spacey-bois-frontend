import React from 'react'

const PlayerInformation = ({
    playerName,
    playerClass,
    currentHarm
}) => {
    
    const showLevelOneHarm = () => {
        return (
            <progress 
                className="health-bar" 
                value={currentHarm.levelOne} 
                max="3"
            >
            </progress>        
        )
    }

    const showLevelTwoHarm = () => {
        return (
            <progress 
                className="health-bar" 
                value={currentHarm.levelTwo} 
                max="3"
            >
            </progress>        
        )
    }
    
    return (
        <div>
            <div className="player-bio">
                <h2>Player Profile</h2>
                <p>Name: {playerName}</p>
                <p>Class: {playerClass}</p>
                <p>Level: 1</p>
            </div>
            <div className="player-harm">
                <h2>Current Harm</h2>
                <h3 className="player-harm-child">Level 1 {showLevelOneHarm()}</h3>
                <h3 className="player-harm-child">Level 2 {showLevelTwoHarm()}</h3>
            </div>
        </div>
    )
}
  
export default PlayerInformation

