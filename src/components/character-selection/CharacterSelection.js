import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../CharacterSelection.css'
import titleCase from '../utility/titleCase'

const CharacterSelection = () => {
    
    const userId = localStorage.getItem('userId')
    const user = useSelector(state => state.user)
    const character = useSelector(state => state.myCharacter)
    const dispatch = useDispatch()
    
    useEffect( () => {
        setUser()
    }, [])
    
    const setUser = () => {
        fetch(`http://127.0.0.1:9000/users/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${window.localStorage.token}` 
            }
        })
        .then(response => response.json())
        .then(user => {
            dispatch({type: "SETUSER", payload: user})
        })
        .catch(error => console.error(error))
    }

    const createCharacterLinks = () => {
        if ( Object.keys(user).length > 0 ) {
            const characterList = user.characters
            return characterList.map( character => (
                <div 
                    key={character.id} 
                    className="character-names"
                    onClick={ () => dispatch({type: "SETCHARACTER", payload: character}) } 
                    to="/enter-the-nautilus"
                >
                    {character.name}
                </div>
            ))
        } 
    }

    const showCharacterStats = () => {
        
        return (
            <>
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
            </>
        )
    }

    return (
        <section id="character-selection">
            <div id="character-list">
                <h1 id="title">Current Characters</h1>
                {createCharacterLinks()} 
                {/* this button needs cleaned up to take you to the players current prompt with all their information */}
                {/* disable this button until a character is chosen */}
                <Link id="select-character" className="link" to="/enter-the-nautilus">Continue</Link>
            </div>
            <div id="character-description">
                { Object.keys(character).length > 0 ? showCharacterStats() : null }
            </div>
            <div>
                <Link className="link" to="/warp">Create New Character</Link>
            </div>
        </section>
    )
}

export default CharacterSelection