const myCharacter = ( state={}, action ) => {
    switch( action.type ) {
        case "SETCHARACTER":
            return action.payload
        default: 
            return state
    }
}

export default myCharacter