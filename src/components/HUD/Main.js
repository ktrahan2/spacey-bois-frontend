import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'
import PlayerInformation from './PlayerInformation'
import Prompt from './Prompt'
class Main extends Component {

    state = {
        promptNumber: 8,
        score: 0,
        optionType: "",
        currentHarm: {
            levelOne: 0,
            levelTwo: 0
        }
    }

    setPromptNumber = (promptNumber) => {
        this.setState({
            promptNumber: promptNumber
        })
    }

    increaseScore = (currentScore) => {
        this.setState({
            score: currentScore + 100
        })
    }

    setOptionType = (type) => {
        this.setState({
            optionType: type
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.optionType !== "attack" && this.state.optionType === "attack") {
            this.determineHarmTaken()
        }
        this.sendHarmWarning()
        if (prevProps.dice !== "") {
            this.props.diceResult("")
        }
    }
    
    determineHarmTaken = () => {
        let roll = this.roll6SidedDie()
        this.props.diceResult(roll)

        if (roll === 6) {
        } else if (roll === 5 || roll === 4) {
            this.setState((prevState) => {
                return {currentHarm: {
                    ...prevState.currentHarm,  
                    levelOne: prevState.currentHarm.levelOne + 1, 
                }}
            })
        } else {
            this.setState((prevState) => {
                return {currentHarm: {
                    ...prevState.currentHarm,  
                    levelTwo: prevState.currentHarm.levelTwo + 1, 
                }}
            })
        }
        this.setState({
            optionType: ""
        })
    }

    resetDiceResult = () => {
        this.props.diceResult("")
    }
   
    roll6SidedDie = () => {
        return 1 + Math.floor(Math.random()*6)
    }

    // needs tidied up, only want to send alert when they first hit 2

    sendHarmWarning = () => {
        if (this.state.currentHarm.levelOne === 2) {
            return window.alert('You are in danger of being knocked unconscious')
        } else if (this.state.currentHarm.levelTwo === 2) {
            return window.alert('You are in danger of dying!!!')
        }
    }

    //make method to send score and username to highscores

    render() {
        
        return (
            <div>
                <header className="hud-header">
                    <Link to="/newgame">back to new game</Link>
                    <Link to="/">Home</Link>
                </header>
                <main className="player-hud">
                    <div className="hud-body">
                        <section className="player">
                            <PlayerInformation
                                currentHarm={this.state.currentHarm}
                            />
                        </section>
                        <section className="prompt">
                            <Prompt 
                                promptNumber={this.state.promptNumber}
                                setPromptNumber={this.setPromptNumber}
                                currentScore={this.state.score}
                                increaseScore={this.increaseScore}
                                setOptionType={this.setOptionType}
                                resetDiceResult={this.resetDiceResult}
                            />
                        </section>
                        <section className="inventory">
                            <Inventory/>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      playerName: state.addPlayerName,
      startingEquipment: state.addStartingEquipment,
      class: state.addClass,
      dice: state.diceResult
    }
  }

function mapDispatchToProps(dispatch) {
    return {
        diceResult: (roll) => dispatch({
            type: "DICERESULT",
            payload: roll
        })
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);
