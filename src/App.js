import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import CreateTable from './components/High-Score-table/CreateTable'
import NewGame from "./character-selection/NewGame"
import MainHUD from "./HUD/Main"


export default function App(){

  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/highscores" component={CreateTable}/>
        <Route path="/newgame" component={NewGame}/> 
        <Route path="/hud" component={MainHUD}/>
        </Switch>
      </main>
      <footer>

      </footer>
    </div>
  );
}

