import React from 'react'
import titleCase from '../utility/titleCase'
import { useSelector } from 'react-redux'

const CharacterStats = () => {

    const character = useSelector(state => state.myCharacter)
    
    return (
        <div id='character-description'>
            <div>
                <label>Name:</label>    
                <p>{character.name}</p>
            </div>
            <div>
                <label>Class:</label>    
                <p>{titleCase(character.class_type.name)}</p>
            </div>
            <div>
                <label>Level:</label>    
                <p>{character.level}</p>
            </div>
            <div>
                <label>Current Episode:</label>
                {/* this is a very ugly way to do this, rethink how to approach it */}
                <p>{character.current_prompt === null || character.current_prompt < 20 ? "Enter The Nautilus" : "future episodes"}</p>
            </div>
        </div>
    )
}

export default CharacterStats
