const diceResult = (state=0, action) => {
    switch(action.type) {
      case "DICERESULT":
        return action.payload
      default:
        return ""
    }
}

export default diceResult