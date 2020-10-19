import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import CreateTable from './components/High-Score-table/CreateTable'
import NewGame from "./character-selection/NewGame"


class App extends Component {

  state = {
    highscores: [],
    startNewGame: false,
    highScoresClicked: false
  }

  render() {
    return (
      <div className="App">
        <header>

        </header>
        <main>
          <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/highscores" component={CreateTable}/>
          <Route path="/newgame" component={NewGame}/> 
          </Switch>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
