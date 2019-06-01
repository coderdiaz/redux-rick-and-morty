import { combineReducers } from "redux";

import charactersReducer from './charactersReducer';
import singleCharacterReducer from './singleCharacterReducer'

export default combineReducers({
  characters: charactersReducer,
  singleCharacter: singleCharacterReducer
})