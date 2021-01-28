import React from 'react'

const CharacterEquipment = ({ classType }) => {

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

export default CharacterEquipment
