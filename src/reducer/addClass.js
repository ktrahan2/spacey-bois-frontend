const addClass = (state="", action) => {
    switch(action.type) {
      default:
        return state
      case "ADDCLASS":
        return action.payload
    }
}

export default addClass