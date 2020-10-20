import React from 'react'
import Prompts from './config.json'

export default function Prompt() {

    let selectedPrompt = Prompts.prompts.find(prompt => {
        return prompt.promptNumber === 1
    })

    let selectedPromptOptions = selectedPrompt.promptOptions.map(option => {
        return (
            <div className="prompt-option">
                <button className="button">{Object.values(option)}</button>
            </div>
        )
    })
    
    return (
        <>
            <div className='prompt-header'>
                <h1 className="current-episode">{selectedPrompt.promptTitle}</h1>
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
