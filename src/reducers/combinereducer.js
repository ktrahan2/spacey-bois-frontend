import { createStore, combineReducers } from 'redux'
import startingEquipment from './startingEquipment'
import playerName from './playerName'
import playerClass from './playerClass'
import diceResult from './diceResult'

const reducer = combineReducers({
  playerName, 
  playerClass, 
  startingEquipment,
  diceResult
})
  
export const store = createStore(reducer)