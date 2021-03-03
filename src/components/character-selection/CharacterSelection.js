import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../CharacterSelection.css'
import { deleteFetch, getOneFetch } from '../fetchCalls'
import CharacterStats from './CharacterStats'
const CharacterSelection = () => {
    
    const userId = localStorage.getItem('userId')
    const user = useSelector(state => state.user)
    const character = useSelector(state => state.myCharacter)
    const [characterList, setCharacterList] = useState([])
    const dispatch = useDispatch()
    
    const setUser = () => {
        getOneFetch('users', userId)
        .then(user => {
            dispatch({type: "SETUSER", payload: user})
            setCharacterList(user.characters)
        })
        .catch(error => console.error(error))
    }

    useEffect( () => {
        setUser()
    }, [])
    
    const selectCharacterLinks = () => {
        if ( Object.keys(user).length > 0 ) {
            
            return characterList.map( character => (
                <div 
                key={character.id} 
                className="character-names"
                onClick={ () => dispatch({type: "SETCHARACTER", payload: character}) } 
                >
                    {character.name}
                </div>
            ))
        } 
    }
    //create are you sure sequence
    const deleteCharacter = (event) => {
        event.preventDefault()
        let selectedCharacters = characterList.filter( thisCharacter => thisCharacter.id !== character.id)
        setCharacterList(selectedCharacters)
        dispatch({type: "RESETCHARACTER"})
        deleteFetch("characters", character.id)
        .then(data => console.log(data))
    }

    return (
        <section id="character-selection">
            <div id="character-list">
                <div>
                    <h1 id="title">Current Characters</h1>
                    {selectCharacterLinks()} 
                </div>
                <div id="character-manipulation-buttons">
                    <Link id="select-character" className={ Object.keys(character).length > 0 ? "link" : "link disabled"} to="/enter-the-nautilus">Continue</Link>
                    <Link to="" onClick={event => deleteCharacter(event)} className="link">Delete</Link>
                </div>
            </div>
            { character.name !== "" ? <CharacterStats/> : <div id="emptydiv"></div> }
            <div>
                <Link className="link" to="/warp">Create New Character</Link>
            </div>
        </section>
    )
}

export default CharacterSelection