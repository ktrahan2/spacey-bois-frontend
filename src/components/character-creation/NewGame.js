import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CharacterEquipment from './CharacterEquipment'
import CharacterClassOptions from './CharacterClassOptions'

const NewGame = () => {

    const dispatch = useDispatch()
    const [ classTypes, setClassTypes ] = useState({})
    const playerClass = useSelector(state => state.playerClass)
    const classTypesLength = Object.keys(classTypes).length
    const chosenClassType = classTypes[playerClass]
    
    useEffect( () => {
        //change into a function
        fetch('http://127.0.0.1:9000/class_types')
        .then(response => response.json())
        .then(classTypes => mapClassTypeToState(classTypes))
        .catch(error => console.error(error))
    }, [])

    const mapClassTypeToState = ( classTypes ) => {
        const mappedClassTypes = {}

        classTypes.forEach( classType => {
            mappedClassTypes[classType.id] = classType
        })
        
        setClassTypes(mappedClassTypes)
    }

    const renderClassDescription = () => {
        if ( classTypesLength > 0 && playerClass ) {
            
            return (
                <section key={chosenClassType.id}>
                    <h2>{chosenClassType.name}</h2>
                    <p>{chosenClassType.description}</p>
                    <div className="starting-equipment">
                        <CharacterEquipment classType={chosenClassType}/>
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
                                onChange={ ( event ) => dispatch({ type: "ADDPLAYERNAME", payload: event.target.value })} 
                                name="playername" 
                                placeholder="Enter Player Name" 
                            >
                            </input>
                        </div>
                        <div className="choose-class">
                            <p>Choose a class:</p>
                            <select className="choose-class-selector" onChange={ ( event ) => dispatch({ type: "ADDCLASS", payload: event.target.value })}>
                                <CharacterClassOptions classTypes={classTypes}/>
                            </select>
                        </div>
                    </div>
                    <div className="class-information">
                        {renderClassDescription()}
                    </div>
                </div>
                <div className="start-game">
                    <Link 
                        className="link" 
                        to="/enter-the-nautilus"
                        onClick={ () => dispatch({type: "ADDSTARTINGEQUIPMENT", payload: chosenClassType.starting_equipments})}
                    > Start Game
                    </Link>
                </div>    
            </main>
        </div>
    )
}
  
export default NewGame;