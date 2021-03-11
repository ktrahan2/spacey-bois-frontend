import React, { useEffect, useState } from 'react'
import RenderDescription from './RenderDescription'
import { getFetch } from '../fetchCalls'
import { useDispatch, useSelector } from 'react-redux'
import PlayerOptions from './PlayerOptions'

const DetailsSelection = ({ setSelectAttributes }) => {

    useEffect(() => {
        getFetch("class_types").then(classTypes => mapDataToState(classTypes, setClassTypes)).catch(error => console.error(error))
        getFetch("vices").then(vices => mapDataToState(vices, setVices)).catch(error => console.error(error))
        getFetch("backgrounds").then(backGrounds => mapDataToState(backGrounds, setBackgrounds)).catch(error => console.error(error))        
    }, [])

    const dispatch = useDispatch()
    const character = useSelector(state => state.myCharacter)
    const [ classTypes, setClassTypes ] = useState({})
    const [ vices, setVices ] = useState({})
    const [ backgrounds, setBackgrounds ] = useState({})
    const playerClass = classTypes[character.class_type_id]
    const playerVice = vices[character.vice_id]
    const playerBackground = backgrounds[character.background_id]

    const mapDataToState = ( dataArray, setState ) => {
        const mappedEntries= {}

        dataArray.forEach( entry => {
            mappedEntries[entry.id] = entry
        })

        setState(mappedEntries)
    }
    return (
        <>
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
                {/* choose a whatever can be refactored to one component */}
                <div className="detail-selector-container">
                    <p>Choose a class:</p>
                    <select className="detail-select" onChange={ ( event ) => dispatch({ type: "SETCLASS", payload: event.target.value })}>
                        <PlayerOptions options={classTypes}/>
                    </select>
                </div>
                <div className="detail-selector-container">
                    <p>Choose a vice:</p>
                    <select className="detail-select" onChange={ ( event ) => dispatch({ type: "SETVICE", payload: event.target.value })}>
                        <PlayerOptions options={vices}/>
                    </select>
                </div>
                <div className="detail-selector-container">
                    <p>Choose a background:</p>
                    <select className="detail-select" onChange={ ( event ) => dispatch({ type: "SETBACKGROUND", payload: event.target.value })}>
                        <PlayerOptions options={backgrounds}/>
                    </select>
                </div>
            </div>
            <div id="details">
                <RenderDescription input={playerClass}/>
                <RenderDescription input={playerVice}/>
                <RenderDescription input={playerBackground}/>                                                
            </div>
        </div>
        <div className="button-section">
            <button 
                className="link" 
                onClick={ () => setSelectAttributes(true)}
            > Attribute Selection
            </button>
        </div>
        </>
    )
}

export default DetailsSelection
