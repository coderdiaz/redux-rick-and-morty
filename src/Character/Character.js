import React from 'react'

const Character = (props) => {
  return (
    <>
      <h1>Hola soy {props.name}, y tengo {props.age}</h1>
      <h2>y mi hobbie es {props.hobbie}</h2>
    </>
  )
}

export default Character; 