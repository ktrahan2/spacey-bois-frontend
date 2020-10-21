import React from 'react'
import {connect} from 'react-redux'

function Inventory(props) {

    let renderItems = props.equipment.map((item, index) => {
        return (
            <p key={index}>{item}</p>        
        )
    })

    return (
        <>
            <h2>Inventory</h2>
            <div className="iventory-items">
                {renderItems}
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
      equipment: state.addStartingEquipment,
    }
  }
  
export default connect(mapStateToProps, null)(Inventory);
