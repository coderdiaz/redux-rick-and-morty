import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterContainer from './Character/CharacterContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <CharacterContainer />
      </div>
    );
  }
}

export default App;
