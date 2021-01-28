const addStartingEquipment = ( state={}, action ) => {
    switch(action.type){
      case "ADDSTARTINGEQUIPMENT":
        return action.payload
      default:
        return state
    }
}

export default addStartingEquipment