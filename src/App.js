import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './Character/Character';

class App extends Component {
  render() {

    const name = 'Yonatan'
    const age = '25'
    const hobbie = 'Echar chela con la buena banda!'

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola, Vine a fotar
          </p>
          <Character
            name={name}
            age={age}
            hobbie={hobbie}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
