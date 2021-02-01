import React from 'react'

const CreatePromptOption = ({ option, selectPromptOption }) => {

    return (
        <div  
            className="prompt-option"
        >
            <button 
                onClick={ (event) => selectPromptOption( event, option ) }
                id={option.nextPrompt} 
                className="button"
            >
                {option.value}
            </button>
        </div>
    )
}

export default CreatePromptOption
