import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../CharacterSelection.css'
import CharacterStats from './CharacterStats'
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

    return (
        <section id="character-selection">
            <div id="character-list">
                <div>
                    <h1 id="title">Current Characters</h1>
                    {createCharacterLinks()} 
                </div>
                <div>
                    <Link id="select-character" className={ Object.keys(character).length > 0 ? "link" : "link disabled"} to="/enter-the-nautilus">Continue</Link>
                </div>
            </div>
            { Object.keys(character).length > 0 ? <CharacterStats/> : <div id="emptydiv"></div> }
            <div>
                <Link className="link" to="/warp">Create New Character</Link>
            </div>
        </section>
    )
}

export default CharacterSelection