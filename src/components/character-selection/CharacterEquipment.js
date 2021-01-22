import React from 'react'

export default function CharacterEquipment({character}) {
    
    const characterEquipment = character.startingEquipment.map((item, index) => {
        return <h4 key={index}>{item}</h4>
    })

    return (
        <div>
            <h3>Starting Equipment</h3>
            {characterEquipment}
        </div>
    )
}
