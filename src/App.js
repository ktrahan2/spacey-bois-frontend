import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {

  }

  componentDidMount() {
    fetch('http://localhost:7000/highscores')
      .then(response => response.json())
      .then(console.log)
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
