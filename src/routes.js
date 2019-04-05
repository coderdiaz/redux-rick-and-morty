import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CharacterContainer from './Character/CharacterContainer';


const Example = () => <h1>Example Works!</h1>

export default () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={CharacterContainer} />
      <Route path="/example" component={Example} />
    </BrowserRouter>
  )
}