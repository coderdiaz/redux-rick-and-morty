import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


const Example = () => <h1>Example Works!</h1>


export default () => {
  return (
    <BrowserRouter>
      <Route path="/example" component={Example} />
    </BrowserRouter>
  )
}