import { createStore, combineReducers } from 'redux'
import startingEquipment from './startingEquipment'
import playerName from './playerName'
import playerClass from './playerClass'
import diceResult from './diceResult'
import playerScore from './playerScore'
import user from './user'

const reducer = combineReducers({
  playerName, 
  playerClass, 
  startingEquipment,
  diceResult,
  playerScore,
  user
})
  
export const store = createStore(reducer)