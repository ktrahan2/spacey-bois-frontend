import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClassList from "./config.json"
import { connect } from 'react-redux'
import CharacterEquipment from './CharacterEquipment'
import CharacterClassOptions from './CharacterClassOptions'

function NewGame(props) {

    const [ classTypes, setClassTypes] = useState({})

    useEffect( () => {
        fetch('http://127.0.0.1:9000/class_types')
        .then(response => response.json())
        .then(result => mapClassTypeToState(result))
    }, [])

    const mapClassTypeToState = ( result ) => {
        
        const mappedObject = {}

        result.forEach( classType => {
            mappedObject[classType.id] = classType
        })
        
        setClassTypes(mappedObject)
    }

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
            let currentClassSelected = props.class
            
            if (currentClassSelected &&
                classTitle === currentClassSelected) {
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
                <Link  className="link" to="/">Main Menu</Link>
            </header>
            <main className="create-character-main">
                <div className="creation-middle">
                    <div className="player-input">
                        <div className="choose-player-name">
                            <p>Choose your characters' name:</p>
                            <input 
                                className="player-name-input"
                                onChange={setPlayerName} 
                                name="playername" 
                                placeholder="Enter Player Name" 
                            >
                            </input>
                        </div>
                        <div className="choose-class">
                            <p>Choose a class:</p>
                            <select className="choose-class-selector" onChange={selectedClass}>
                                <CharacterClassOptions classTypes={classTypes}/>
                            </select>
                        </div>
                    </div>
                    <div className="class-information">
                        {renderClassDescription()}
                    </div>
                </div>
                <div className="start-game">
                    <Link className="link" onClick={handleClick} to="/enter-the-nautilus">Start Game</Link>
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