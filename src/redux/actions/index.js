import { FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR, FETCH_SINGLE_CHARACTER_SUCCESS, FETCH_SINGLE_CHARACTER_ERROR } from './types'
import axios from 'axios'


const BASE_URL = 'https://rickandmortyapi.com/api/character/'

// charactersReducer
export const fetchCharactersSuccess = characters => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters
})

export const fetchCharactersError = err => ({
  type: FETCH_CHARACTERS_ERROR,
  payload: err,
  error: true
});

export const fetchCharactersAsync = (url) => {
  return async dispatch => {
    try {
      const res = await axios.get(BASE_URL)
      console.log('response: ', res.data.results)
      dispatch(fetchCharactersSuccess(res.data.results))
    } catch(err) {
      dispatch(fetchCharactersError(err))
    }
  }
}

// singleCharacterReducer

export const fetchSingleCharacterSuccess = character => ({
  type: FETCH_SINGLE_CHARACTER_SUCCESS,
  payload: character
})

export const fetchSingleCharacterError = err => ({
  type: FETCH_SINGLE_CHARACTER_ERROR,
  payload: err,
  error: true
})

export const fetchSingleCharacterAsync = (url, id) => {
  return async dispatch => {
    try {
      const res = await axios.get(`${BASE_URL}${id}`)
      console.log(res.data)
      dispatch(fetchSingleCharacterSuccess(res.data.results))
    } catch (err) {
      dispatch(fetchSingleCharacterError(err))
    }
  }
}