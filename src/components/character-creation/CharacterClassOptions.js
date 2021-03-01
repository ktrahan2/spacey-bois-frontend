import React from 'react'

const CharacterClassOptions = ({ classTypes }) => {
    
    const createClassOptions = () => {
        let optionArray = []
        let classTypesLength = Object.keys(classTypes).length
        if ( classTypesLength > 0 ) {
            for ( let type in classTypes ) {
                let currentClass = classTypes[type]
                optionArray.push(<option value={type} key={currentClass.id}>{currentClass.name}</option>)
            }
            return optionArray
        }
    }

    return (
        <>
            {createClassOptions()}
        </>
    )
}

export default CharacterClassOptions
