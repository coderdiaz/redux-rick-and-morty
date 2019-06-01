import { FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR } from './types'
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

export const fetchCharactersAsync = () => {
  return async dispatch => {
    try {
      res = await axios.get(BASE_URL)
      console.log('response: ', res.data)
      // dispatch(fetchCharactersSuccess(res.data))
    } catch(err) {
      dispatch(fetchCharactersError(err))
    }
  }
}

