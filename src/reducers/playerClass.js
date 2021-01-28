const playerClass = ( state="", action ) => {
    switch( action.type ) {
      case "ADDCLASS":
        return action.payload
      default:
        return state
    }
}

export default playerClass