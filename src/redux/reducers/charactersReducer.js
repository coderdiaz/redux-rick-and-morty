import {
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from "../actions/types";

const charactersReducer = (state = [], action) => {
  switch (action.types) {
    case FETCH_CHARACTERS_SUCCESS:
      return action.payload;
    case FETCH_CHARACTERS_ERROR:
      return { ...state, err: action.payload }
  }
}

export default charactersReducer;