import { createStore, combineReducers } from 'redux'
import addStartingEquipment from './addStartingEquipment'
import addPlayerName from './addPlayerName'
import addClass from './addClass'
import diceResult from './diceResult'

const reducer = combineReducers({
    addPlayerName, 
    addClass, 
    addStartingEquipment,
    diceResult
  })
  
export const store = createStore(reducer)