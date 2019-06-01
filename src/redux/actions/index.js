import { FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR } from './types'

// characterReducer
export const fetchCharactersSuccess = characters => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters
})

export const fetchCharactersError = err => ({
  type: FETCH_CHARACTERS_ERROR,
  payload: err,
  error: true
})