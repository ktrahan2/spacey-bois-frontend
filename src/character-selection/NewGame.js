import React from 'react'
import { Link } from 'react-router-dom'
import ClassList from "./config.json"
import {connect} from 'react-redux'
import CharacterEquipment from './CharacterEquipment'
import CharacterClassOptions from './CharacterClassOptions'

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
        return ClassList.classes.map((character, index) => {
            
            let classTitle = character.classTitle
            let currentClass = props.class
            
            if (currentClass &&
                classTitle === currentClass) {
                return (
                    <section key={index}>
                        <h2>{character.classTitle}</h2>
                        <p>{character.description}</p>
                        <div className="starting-equipment">
                            <CharacterEquipment character={character}/>
                        </div>
                    </section>
                )
            }
        })
    }

    return (
        <div className="create-character-body">
            <header className="create-character-header">
                <Link  to="/">Home Menu</Link>
            </header>
            <main className="create-character-main">
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
                            <CharacterClassOptions/>
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