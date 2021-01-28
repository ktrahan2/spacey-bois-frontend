const startingEquipment = ( state=[], action ) => {
    switch( action.type ){
      case "ADDSTARTINGEQUIPMENT":
        return action.payload
      default:
        return state
    }
}

export default startingEquipment