import React from 'react'
import Prompts from './Config'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

export default function Prompt({
        promptNumber, 
        setPromptNumber,  
        setOptionType, 
        resetDiceResult,
        sendHighScore
    }) {

    const dispatch = useDispatch()    
    const history = useHistory()
        
    let selectedPrompt = Prompts().find(prompt => {
        return prompt.promptNumber == promptNumber
    })

    let selectPromptOption = (event, option) => {
        if (event.target.id <= 20) { 
            setPromptNumber(event.target.id)
            dispatch({ type: "INCREASESCORE", payload: 100})
            setOptionType(option.type)
            resetDiceResult()
        }
        else {
            sendHighScore()
            history.push('/credits')
        }
    }

    let selectedPromptText = selectedPrompt.promptText.split("\n")

    selectedPromptText = selectedPromptText.map((text, index) => {
        return (
                <p 
                    className="prompt-text" 
                    key={index}
                >
                    {text}
                </p>
        )
    })

    const selectedPromptOptions = selectedPrompt.promptOptions.map((option, index) => {
        return (
            <div 
                key={index} 
                className="prompt-option"
            >
                <button 
                    onClick={(event) => selectPromptOption(event, option)}
                    id={option.nextPrompt} 
                    className="button"
                >
                    {Object.values(option)[0]}
                </button>
            </div>
        )
    })

    return (
        <>
            <div className='prompt-header'>
                <h1 className="current-episode">{selectedPrompt.promptEpisode}</h1>
            </div>
            <div className="prompt-texts">
                <div>{selectedPromptText}</div>
            </div>
            <div className="prompt-options">
                {selectedPromptOptions}
            </div>
        </>
    )
}
