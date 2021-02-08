import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../CharacterSelection.css'

const CharacterSelection = () => {
    
    const userId = localStorage.getItem('userId')
    const user = useSelector(state => state.user)
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
                <Link 
                    key={character.id} 
                    className="link" 
                    onClick={ () => dispatch({type: "SETCHARACTER", payload: character}) } 
                    to="/enter-the-nautilus"
                >
                    {character.name}
                </Link>
            ))
        } 
    }

    return (
        <section id="character-selection">
            <div id="character-list">
                <h1>Characters:</h1>
                {createCharacterLinks()} 
                <Link className="link" to="/warp">Create New Character</Link>
            </div>
            <div id="character-description">

            </div>
        </section>
    )
}

export default CharacterSelection