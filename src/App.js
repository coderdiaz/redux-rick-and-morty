import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Character from './Character/Character';

import axios from 'axios';

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    this.getCharacter()
    // console.log('state from componentDidMount: ', this.state)
  }

  async getCharacter() {
    // let random = Math.floor(Math.random() * 100 + 1)
    try {
      // const res = await axios.get(`https://rickandmortyapi.com/api/character/${random}/`)
      const res = await axios.get(`https://rickandmortyapi.com/api/character/`)
      // console.log('characters: ', res.data.results)
      this.setState({ characters: res.data.results})
    }
    catch(err) {
      console.log(err)
    }
  }

  render() {
    let characters = this.state.characters.map(character => {
      return <Character
        key={character.id}
        image={character.image}
        name={character.name}
        gender={character.gender}
        specie={character.species}
      />
    })
    // console.log('state from render: ', this.state)
    return (
      <div className="App">
        <header className="App-header">
          { characters }
        </header>
      </div>
    );
  }
}

export default App;
