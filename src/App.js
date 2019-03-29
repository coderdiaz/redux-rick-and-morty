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
          <Character
            image={this.state.characters.image}
            name={this.state.characters.name}
            gender={this.state.characters.gender}
            specie={this.state.characters.species}
            getCharacter={() => this.getCharacter()}
          />
        </header>
      </div>
    );
  }
}

export default App;
