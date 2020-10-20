import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'
import PlayerInformation from './PlayerInformation'
import Prompt from './Prompt'

class Main extends Component {

    state = {
        promptNumber: 2,
    }

    setPromptNumber = (promptNumber) => {
        this.setState({
            promptNumber: promptNumber
        })
    }

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
