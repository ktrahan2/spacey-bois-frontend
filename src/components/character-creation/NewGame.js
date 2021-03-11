import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../../NewGame.css'
import DetailsSelection from './DetailsSelection'
import AttributeSelection from './AttributeSelection'

const NewGame = () => {

    const dispatch = useDispatch()
    //change back to false after done with page
    const [ isSelectAttributes, setSelectAttributes ] = useState(true)
    const userId = localStorage.getItem('userId')

    //this sets the userId for the character
    useEffect( () => {
        dispatch({ type: "SETUSERID", payload: userId})
    }, [])
   
    return (
        <div className="create-character-body">
            <header className="create-character-header">
                <Link  className="link" to="/character-selection" onClick={() => dispatch({type: "RESETCHARACTER"})}>Character Selection</Link>
            </header>
            <main className="create-character-main">
                { isSelectAttributes ? 
                    <AttributeSelection setSelectAttributes={setSelectAttributes}/>     
                :
                    <DetailsSelection setSelectAttributes={setSelectAttributes}/>
                }
            </main>
        </div>
    )
}
  
export default NewGame;