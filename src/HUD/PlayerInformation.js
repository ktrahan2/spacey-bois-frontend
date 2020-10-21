import React from 'react'
import {connect} from 'react-redux'

function PlayerInformation(props) {
    
    const showLevelOneHarm = () => {
        return <progress 
                    className="health-bar" 
                    value={props.currentHarm.levelOne} 
                    max="3"
                >
                </progress>        
    }

    const showLevelTwoHarm = () => {
        return <progress 
                    className="health-bar" 
                    value={props.currentHarm.levelTwo} 
                    max="3"
                >
                </progress>        

    }
    
    return (
        <div>
            <div className="player-bio">
                <h2>Player Profile</h2>
                <p>Name: {props.playerName}</p>
                <p>Class: {props.class}</p>
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

function mapStateToProps(state) {
    return {
      playerName: state.addPlayerName,
      class: state.addClass
    }
  }
  
export default connect(mapStateToProps, null)(PlayerInformation);

