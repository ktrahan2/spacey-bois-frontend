import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import CreateTable from './components/High-Score-table/CreateTable'
import NewGame from "./components/character-creation/NewGame"
import MainHUD from "./components/HUD/Main"
import Warp from "./components/transitions/Warp"
import EnterTheNautilus from './components/transitions/EnterTheNautilus'
import FinishEpisodeOne from './components/transitions/FinishEpisodeOne'
import CharacterSelection from './components/character-selection/CharacterSelection'
import PrivateRoute from './components/utility/PrivateRoute'

export default function App(){

  return (
    <div className="App">
      {/* add protected routes */}
      <main>
        <Switch>          
          <Route path="/" component={Home} exact/>
          <PrivateRoute path="/character-selection" component={CharacterSelection}/>
          <PrivateRoute path="/highscores" component={CreateTable}/>
          <PrivateRoute path="/newgame" component={NewGame}/> 
          <PrivateRoute path="/hud" component={MainHUD}/>
          <PrivateRoute path="/warp" component={Warp}/>
          <PrivateRoute path="/enter-the-nautilus" component={EnterTheNautilus}/>
          <PrivateRoute path="/credits" component={FinishEpisodeOne}/>
        </Switch>
      </main>
    </div>
  );
}

