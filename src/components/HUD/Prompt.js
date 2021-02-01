import React from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import SendHighScore from '../utility/SendHighScore'
import CreatePromptOption from './CreatePromptOption'

export default function Prompt({
        playerName, 
        setPromptNumber, 
        currentPrompt,  
        resetDiceResult,
    }) {

    const dispatch = useDispatch()    
    const history = useHistory()
    const playerScore = useSelector( state => state.playerScore)
    const currentPromptLength = Object.keys(currentPrompt).length

    let selectPromptOption = (event, option) => {
        
        if (event.target.id <= 20) { 
            setPromptNumber(option.next_prompt)
            dispatch({ type: "INCREASESCORE", payload: 100 })
            resetDiceResult()
        }
        else {
            SendHighScore( playerName, playerScore )
            history.push('/credits')
        }
    }
    
    const createPromptText = () => {
        if ( currentPromptLength > 0 ) {
            return currentPrompt.prompt_text.split("*").map( ( text, index ) => {
                return (
                    <p 
                        className="prompt-text" 
                        key={ index }
                    >
                        { text }
                    </p>
                )
            })
        }
    }

    const createPromptOptions = () => {
        if ( currentPromptLength > 0 ) {
            return currentPrompt.prompt_options.map( ( option ) => (
                <CreatePromptOption 
                    key={option.id}
                    option={option}
                    selectPromptOption={selectPromptOption}
                />
            ))
        }
    }

    return (
        <>
            <div className='prompt-header'>
                <h1 className="current-episode">{currentPrompt.title}</h1>
            </div>
            <div className="prompt-texts">
                <div>{createPromptText()}</div>
            </div>
            <div className="prompt-options">
                {createPromptOptions()}
            </div>
        </>
    )
}
