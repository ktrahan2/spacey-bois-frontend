const playerScore = ( state=0, action ) => {
    switch( action.type ) {
      case "INCREASESCORE":
        return state + action.payload
      default:
        return state
    }
}

export default playerScore