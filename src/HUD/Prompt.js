import React from 'react'
import PromptsList from './config.json'

export default function Prompt({
        promptNumber, 
        setPromptNumber, 
        currentScore, 
        increaseScore, 
        setOptionType, 
        currentHarm
    }) {

    let selectedPrompt = PromptsList.prompts.find(prompt => {
        return prompt.promptNumber == promptNumber
    })

    let handleClick = (event, option) => {
        setPromptNumber(event.target.id)
        increaseScore(currentScore)
        setOptionType(option.type)
        
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

    let selectedPromptOptions = selectedPrompt.promptOptions.map(option => {
        return (
            <div 
                key={option.nextPrompt} 
                className="prompt-option"
            >
                <button 
                    onClick={(event) => handleClick(event, option)}
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
                <p>{selectedPromptText}</p>
            </div>
            <div className="prompt-options">
                {selectedPromptOptions}
            </div>
        </>
    )
}
