import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const reducer = combineReducers({
  addPlayerName, 
  addClass, 
  addStartingEquipment,
  diceResult
})

export const store = createStore(reducer)

function addStartingEquipment(state=[], action) {
  switch(action.type){
    case "ADDSTARTINGEQUIPMENT":
      return action.payload
    default:
      return ["Blaster", "Medkit"]
  }
}

function addPlayerName(state="", action) {
  switch(action.type) {
    case "ADDPLAYERNAME":
      return action.payload
    default:
      return "ktrain96"
  }
}

function addClass(state="", action) {
  switch(action.type) {
    case "ADDCLASS":
      return action.payload
    default:
      return "Mystic"
  }
}

function diceResult(state=0, action) {
  switch(action.type) {
    case "DICERESULT":
      return action.payload
    default:
      return ""
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}> 
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

