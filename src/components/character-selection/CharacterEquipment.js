import React from 'react'
import { useDispatch } from "react-redux"

export default function CharacterEquipment({ classType }) {
    
    //refactor redux store in order to do this. Change everything to use hooks
    const mapCharacterEquipmentToState = () => {
        return classType.starting_equipments.map( equipment => (
            console.log(equipment)
        ))
    }
    const renderCharacterEquipment = () => {
        return classType.starting_equipments.map( equipment => (
            <h4 key={equipment.id}>{equipment.equipment.name}</h4>
        ))
    }

    return (
        <div>
            <h3>Starting Equipment</h3>
            {renderCharacterEquipment()}
        </div>
    )
}
