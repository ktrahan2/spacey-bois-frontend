import React from 'react'

const Inventory = ({ startingEquipment }) => {

    const renderItems = () => { 
        return startingEquipment.map((item, index) => (
            <p key={index}>{item['equipment']['name']}</p>        
        ))
    }

    return (
        <>
            <h2>Inventory</h2>
            <div className="iventory-items">
                {renderItems()}
            </div>
        </>
    )
}
  
export default Inventory
