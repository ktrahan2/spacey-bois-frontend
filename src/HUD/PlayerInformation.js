import React from 'react'
import {connect} from 'react-redux'

function PlayerInformation(props) {
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
                <h3>Level 1</h3>
                <h3>Level 2</h3>
                <h3>Level 3</h3>
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

