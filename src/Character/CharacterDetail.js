import React, { Component } from 'react'
import axios from 'axios'

class CharacterDetail extends Component {

  state = {
    image: '',
    name: '',
    origin: ''
  }

  componentDidMount(){
    this.getCharacter()
  }

  async getCharacter() {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
      // console.log('characters: ', res.data)
      this.setState({
        image: res.data.image,
        name: res.data.name,
        origin: res.data.origin.name
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <img src={this.state.image} alt=""/>
        <h1>{this.state.name}</h1>
        <p>{this.state.origin}</p>
      </>
    )
  }
}

export default CharacterDetail