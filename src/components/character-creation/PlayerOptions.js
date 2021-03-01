import React from 'react'
import titleCase from '../utility/titleCase'

const PlayerOptions = ({ options }) => {
    
    const createOptions = () => {
        let optionArray = []
        let optionsLength = Object.keys(options).length
        if ( optionsLength > 0 ) {
            for ( let type in options ) {
                let currentOption = options[type]
                optionArray.push(<option value={type} key={currentOption.id}>{titleCase(currentOption.name) || currentOption.title}</option>)
            }
            return optionArray
        }
    }

    return (
        <>
            {createOptions()}
        </>
    )
}

export default PlayerOptions
