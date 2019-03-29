import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './Character/Character';

import axios from 'axios';

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    this.getCharacter()
    console.log('state from componentDidMount: ', this.state)
  }

  async getCharacter() {
    let random = Math.floor(Math.random() * 100 + 1)
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${random}/`)
      console.log('characters: ', res.data)
      this.setState({ characters: res.data})
    }
    catch(err) {
      console.log(err)
    }
  }

  render() {
    console.log('state from render: ', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.characters.image || logo} className="App-logo" alt="logo" />
          <button onClick={() => this.getCharacter()}>Random character</button>
          <Character />
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
