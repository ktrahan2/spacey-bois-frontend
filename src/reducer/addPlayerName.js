const addPlayerName = (state="", action) => {
    switch(action.type) {
      case "ADDPLAYERNAME":
        return action.payload
      default:
        return state
    }
}

export default addPlayerName