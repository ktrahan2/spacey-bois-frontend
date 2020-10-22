import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import CreateTable from './components/High-Score-table/CreateTable'
import NewGame from "./components/character-selection/NewGame"
import MainHUD from "./components/HUD/Main"
import Warp from "./components/transitions/Warp"
import EnterTheNautilus from './components/transitions/EnterTheNautilus';
import FinishEpisodeOne from './components/transitions/FinishEpisodeOne'

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
        <Route path="/warp" component={Warp}/>
        <Route path="/enter-the-nautilus" component={EnterTheNautilus}/>
        <Route path="/credits" component={FinishEpisodeOne}/>
        </Switch>
      </main>
      <footer>

      </footer>
    </div>
  );
}

