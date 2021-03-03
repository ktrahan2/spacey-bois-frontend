const initialState = {
    user_id: 0,
    name: "",
    class_type_id: 0,
    vice_id: 0,
    background_id: 0,
    heritage_id: 0,
    level: 1,
    current_harm: 0,
    experience_tracker: 0,
    current_prompt: 1
}


const myCharacter = ( state=initialState, action ) => {
    switch( action.type ) {
        case "SETCHARACTER":
            return action.payload
        case "SETNAME":
            return {...state, name: action.payload}
        case "SETCLASS":
            return {...state, class_type_id: action.payload}
        case "SETVICE":
            return {...state, vice_id: action.payload}
        case "SETBACKGROUND":
            return {...state, background_id: action.payload}
        case "SETUSERID":
            return {...state, user_id: action.payload}
        case "RESETCHARACTER":
            return initialState
        default: 
            return state
    }
}

export default myCharacter