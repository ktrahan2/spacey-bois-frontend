import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CharacterEquipment from './CharacterEquipment'
import PlayerOptions from './PlayerOptions'
import '../../NewGame.css'
import {getFetch, postFetch} from '../fetchCalls'
import titleCase from '../utility/titleCase'

const NewGame = () => {

    const dispatch = useDispatch()
    const [ classTypes, setClassTypes ] = useState({})
    const [ vices, setVices ] = useState({})
    const [ backgrounds, setBackgrounds ] = useState({})
    const character = useSelector(state => state.myCharacter)
    const playerClass = classTypes[character.class_type_id]
    const playerVice = vices[character.vice_id]
    const playerBackground = backgrounds[character.background_id]
    const userId = localStorage.getItem('userId')
    
    useEffect( () => {
        getFetch("class_types").then(classTypes => mapDataToState(classTypes, setClassTypes)).catch(error => console.error(error))
        getFetch("vices").then(vices => mapDataToState(vices, setVices)).catch(error => console.error(error))
        getFetch("backgrounds").then(backGrounds => mapDataToState(backGrounds, setBackgrounds)).catch(error => console.error(error))
        dispatch({ type: "SETUSERID", payload: userId})
    }, [])

    const mapDataToState = ( dataArray, setState ) => {
        const mappedEntries= {}

        dataArray.forEach( entry => {
            mappedEntries[entry.id] = entry
        })

        setState(mappedEntries)
    }

    const renderDescription = ( state ) => {
        if ( state ) {
            return (
                <section key={state.id}>
                    <h2>{titleCase(state.name) || state.title}</h2>
                    <p>{state.description}</p>
                </section>
            )
        }
    }

    const createCharacter = () => {
        let body = {character: character}
        postFetch("characters", body).then(data => console.log(data))
    }

    return (
        <div className="create-character-body">
            <header className="create-character-header">
                <Link  className="link" to="/character-selection">Character Selection</Link>
            </header>
            <main className="create-character-main">
                <div className="creation-middle">
                    <div className="player-input">
                        <div className="choose-player-name">
                            <p>Choose your characters' name:</p>
                            <input 
                                className="player-name-input"
                                onChange={ ( event ) => dispatch({ type: "SETNAME", payload: event.target.value })}  
                                placeholder="Enter Player Name" 
                            >
                            </input>
                        </div>
                        <div className="choose-class">
                            <p>Choose a class:</p>
                            <select className="choose-class-selector" onChange={ ( event ) => dispatch({ type: "SETCLASS", payload: event.target.value })}>
                                <PlayerOptions options={classTypes}/>
                            </select>
                        </div>
                        <div className="choose-class">
                            <p>Choose a vice:</p>
                            <select className="choose-class-selector" onChange={ ( event ) => dispatch({ type: "SETVICE", payload: event.target.value })}>
                                <PlayerOptions options={vices}/>
                            </select>
                        </div>
                        <div className="choose-class">
                            <p>Choose a background:</p>
                            <select className="choose-class-selector" onChange={ ( event ) => dispatch({ type: "SETBACKGROUND", payload: event.target.value })}>
                                <PlayerOptions options={backgrounds}/>
                            </select>
                        </div>
                    </div>
                    <div className="class-information">
                        {renderDescription(playerClass)}
                        {renderDescription(playerVice)}
                        {renderDescription(playerBackground)}
                    </div>
                </div>
                <div className="start-game">
                    <Link 
                        className="link" 
                        // to="/enter-the-nautilus"
                        onClick={ () => createCharacter()}
                    > Start Game
                    </Link>
                </div>    
            </main>
        </div>
    )
}
  
export default NewGame;