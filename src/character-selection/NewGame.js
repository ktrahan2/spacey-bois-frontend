import React from 'react'
import { Link } from 'react-router-dom'
import ClassList from "./config.json"
import {connect} from 'react-redux'


function NewGame(props) {

    const handleClick = () => {
        ClassList.classes.map(character => {
            if (props.class &&
                character.classTitle === props.class) {
                props.addStartingEquipment(
                    [...character.startingEquipment]
                )
            }
        })
    }

    const setPlayerName = (event) => {
        props.addPlayerName(event.target.value)
    }

    const selectedClass = (event) => {
        props.addClass(event.target.value)
    } 
    

    const renderClassDescription = () => {
        return ClassList.classes.map(character => {
            if (props.class &&
                character.classTitle === props.class) {
                return (
                    <section key={character.id}>
                        <h2>{character.classTitle}</h2>
                        <p>{character.description}</p>
                        {/* add to this div to component that will check all starting equipment and then make the h4 */}
                        <div className="starting-equipment">
                            <h3>Starting Equipment</h3>
                            <h4>{character.startingEquipment[0]}</h4>
                            <h4>{character.startingEquipment[1]}</h4>
                        </div>
                    </section>
                )
            }
        })
    }

    return (
        <div>
            <header>
                <Link to="/">Home Menu</Link>
            </header>
            <main>
                <form>
                    <div className="choose-player-name">
                        <p>Choose your characters name:</p>
                        <input 
                            onChange={setPlayerName} 
                            name="playername" 
                            placeholder="Enter Player Name" 
                        >
                        </input>
                    </div>
                    <div className="choose-class">
                        <p>Choose a class:</p>
                        <select onChange={selectedClass}>
                            <option value="Mystic">Msytic</option>
                            <option value="Pilot">Pilot</option>
                            <option value="Scoundrel">Scoundrel</option>
                            <option value="Mechanic">Mechanic</option>
                            <option value="Muscle">Muscle</option>
                            <option value="Speaker">Speaker</option>
                            <option value="Stitch">Stitch</option>
                        </select>
                    </div>
                    <Link onClick={handleClick} to="/hud">Start Game</Link>
                </form>
                <div>
                    {renderClassDescription()}
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
  
  function mapDispatchToProps(dispatch) {
    return {
        addClass: (characterClass) => dispatch({
            type: "ADDCLASS", 
            payload: characterClass
        }),
        addPlayerName: (playerName) => dispatch({
            type: "ADDPLAYERNAME",
            payload: playerName
        }),
        addStartingEquipment: (startingEquipment) => dispatch({
            type: "ADDSTARTINGEQUIPMENT",
            payload: startingEquipment
        })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewGame);