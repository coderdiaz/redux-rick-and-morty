import React from 'react'

const Character = ({image, name, gender, specie, getCharacter}) => {
  return (
    <>
      <img src={image} alt="character"/>
      <h1>{name}</h1>
      <p>{gender}</p>
      <p>{specie}</p>
      <button onClick={getCharacter}>Random Character</button>
    </>
  )
}

export default Character;