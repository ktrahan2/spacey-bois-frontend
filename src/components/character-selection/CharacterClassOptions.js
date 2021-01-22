import React from 'react'

export default function CharacterClassOptions({ classTypes }) {
    
    const createClassOptions = () => {
        let optionArray = []
        let classTypesLength = Object.keys(classTypes).length
        if ( classTypesLength > 0 ) {
            for ( let i = 1; i < classTypesLength; i++) {
                
                let currentClass = classTypes[i]
                optionArray.push(<option value={currentClass.id} key={currentClass.id}>{currentClass.name}</option>)
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
