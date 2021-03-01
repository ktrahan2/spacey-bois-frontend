import { createStore, combineReducers } from 'redux'
import startingEquipment from './startingEquipment'

import diceResult from './diceResult'
import playerScore from './playerScore'
import user from './user'
import myCharacter from './character'

const reducer = combineReducers({
  startingEquipment,
  diceResult,
  playerScore,
  user,
  myCharacter
})
  
export const store = createStore(reducer)