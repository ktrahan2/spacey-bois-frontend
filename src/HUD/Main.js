import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'
import PlayerInformation from './PlayerInformation'
import Prompt from './Prompt'

function Main() {
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
                       <Prompt/>
                    </section>
                    <section className="inventory">
                        <Inventory/>
                    </section>
                </div>
            </main>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      playerName: state.addPlayerName,
      startingEquipment: state.addStartingEquipment,
      class: state.addClass
    }
  }
  
export default connect(mapStateToProps, null)(Main);
