import React from 'react'
import Prompts from './Config'

export default function Prompt({
        promptNumber, 
        setPromptNumber, 
        currentScore, 
        increaseScore, 
        setOptionType, 
        resetDiceResult
    }) {
        
    let selectedPrompt = Prompts().find(prompt => {
        return prompt.promptNumber == promptNumber
    })

    let handleClick = (event, option) => {
        setPromptNumber(event.target.id)
        increaseScore(currentScore)
        setOptionType(option.type)
        resetDiceResult()
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
                <div>{selectedPromptText}</div>
            </div>
            <div className="prompt-options">
                {selectedPromptOptions}
            </div>
        </>
    )
}
