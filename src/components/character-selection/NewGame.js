import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import ClassList from "./config.json"
import { connect } from 'react-redux'
import CharacterEquipment from './CharacterEquipment'
import CharacterClassOptions from './CharacterClassOptions'

function NewGame(props) {

    const [ classTypes, setClassTypes] = useState({})
    const classTypesLength = Object.keys(classTypes).length

    useEffect( () => {
        fetch('http://127.0.0.1:9000/class_types')
        .then(response => response.json())
        .then(classTypes => mapClassTypeToState(classTypes))
    }, [])

    const mapClassTypeToState = ( classTypes ) => {
        
        const mappedClassTypes = {}

        classTypes.forEach( classType => {
            mappedClassTypes[classType.id] = classType
        })
        
        setClassTypes(mappedClassTypes)
    }

    const renderClassDescription = () => {
        
        if ( classTypesLength > 0 && props.class ) {
            let classType = classTypes[props.class]
            return (
                <section key={classType.id}>
                    <h2>{classType.name}</h2>
                    <p>{classType.description}</p>
                    <div className="starting-equipment">
                        <CharacterEquipment classType={classType}/>
                    </div>
                </section>
            )
        }
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
                                onChange={ ( event ) => props.addPlayerName(event.target.value)} 
                                name="playername" 
                                placeholder="Enter Player Name" 
                            >
                            </input>
                        </div>
                        <div className="choose-class">
                            <p>Choose a class:</p>
                            <select className="choose-class-selector" onChange={ (event) => props.addClass(event.target.value)}>
                                <CharacterClassOptions classTypes={classTypes}/>
                            </select>
                        </div>
                    </div>
                    <div className="class-information">
                        {renderClassDescription()}
                    </div>
                </div>
                <div className="start-game">
                    <Link className="link" to="/enter-the-nautilus">Start Game</Link>
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