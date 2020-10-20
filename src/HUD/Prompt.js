import React from 'react'
import PromptsList from './config.json'

export default function Prompt({promptNumber, setPromptNumber}) {

    let selectedPrompt = PromptsList.prompts.find(prompt => {
        return prompt.promptNumber == promptNumber
    })

    let handleClick = (event) => {
        setPromptNumber(event.target.id)
    }

    let selectedPromptText = selectedPrompt.promptText.split("\n")
    console.log(selectedPromptText)
    selectedPromptText= selectedPromptText.map(text => {
        return (
            <div classname="json-text">
                <p>{text}</p>
            </div>
        )
    })

    let selectedPromptOptions = selectedPrompt.promptOptions.map(option => {
        return (
            <div 
                key={option.nextPrompt} 
                className="prompt-option"
            >
                <button 
                    onClick={handleClick}
                    id={option.nextPrompt} 
                    className="button">{Object.values(option)[0]}
                </button>
            </div>
        )
    })
    
    return (
        <>
            <div className='prompt-header'>
                <h1 className="current-episode">{selectedPrompt.promptEpisode}</h1>
            </div>
            <div className="prompt-text">
                <p>{selectedPrompt.promptText}</p>
            </div>
            <div className="prompt-options">
                {selectedPromptOptions}
            </div>
        </>
    )
}
