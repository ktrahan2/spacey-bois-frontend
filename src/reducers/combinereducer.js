import { createStore, combineReducers } from 'redux'
import startingEquipment from './startingEquipment'
import playerName from './playerName'
import playerClass from './playerClass'
import diceResult from './diceResult'
import playerScore from './playerScore'

const reducer = combineReducers({
  playerName, 
  playerClass, 
  startingEquipment,
  diceResult,
  playerScore
})
  
export const store = createStore(reducer)