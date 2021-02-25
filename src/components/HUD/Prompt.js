import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SendHighScore from '../utility/SendHighScore'
import CreatePromptOption from './CreatePromptOption'

const Prompt = ({
        playerName, 
        setPromptNumber, 
        currentPrompt,  
        resetDiceResult,
    }) => {

    const dispatch = useDispatch()    
    const currentPromptLength = Object.keys(currentPrompt).length
    
    //change to prompt number instead of event.target.id
    let selectPromptOption = (event, option) => {
        if (event.target.id <= 20) { 
            setPromptNumber(option.next_prompt)
            // resetDiceResult()
        }
    }
    
    const createPromptText = () => {
        if ( currentPromptLength > 0 ) {
            return currentPrompt.prompt_text.split("*").map( ( text, index ) => {
                //splits the text to interpolate the variables needed, only using playerName right now
                let textArray = text.split("$")
                for ( let i = 0; i < textArray.length; i++) {
                    if ( textArray[i] === "playerName") {
                        textArray[i] = playerName
                    }
                }
                text = textArray.join('')
                return (
                    <p 
                        className="prompt-text" 
                        key={ index }
                    >
                        {text}
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
                <h1 className="current-episode">{currentPrompt.episode}</h1>
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

export default Prompt