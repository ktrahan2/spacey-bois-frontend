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
            levelTwo: 0,
            levelThree: 0
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
            this.determineDamage()
        }
    }
    
    determineDamage = () => {
        let roll = this.roll6SidedDie()
        console.log(roll)
        if (roll === 6) {
            
        } else if (roll === 5 || roll === 4) {
            this.setState((prevState) => {
                return {currentHarm: {
                    ...prevState.currentHarm,  
                    levelOne: prevState.currentHarm.levelOne + 1 
                }}
            })
        } else {
            this.setState((prevState) => {
                return {currentHarm: {
                    ...prevState.currentHarm,  
                    levelTwo: prevState.currentHarm.levelTwo + 1 
                }}
            })
        }
        this.setState({
            optionType: ""
        })
    }
   
    roll6SidedDie = () => {
        return 1 + Math.floor(Math.random()*6)
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
                            <PlayerInformation/>
                        </section>
                        <section className="prompt">
                            <Prompt 
                                promptNumber={this.state.promptNumber}
                                setPromptNumber={this.setPromptNumber}
                                currentScore={this.state.score}
                                increaseScore={this.increaseScore}
                                setOptionType={this.setOptionType}
                                currentHarm={this.state.currentHarm}
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
      class: state.addClass
    }
  }
  
export default connect(mapStateToProps, null)(Main);
