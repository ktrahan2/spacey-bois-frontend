import React from 'react'
import ClassList from "./config.json"
export default function CharacterClassOptions() {
    
    let classList = ClassList.classes.map((characterClass, index) => {
        return (
            <option key={index}>{characterClass.classTitle}</option>
        )
    })

    return (
        <>
            {classList}    
        </>
    )
}
