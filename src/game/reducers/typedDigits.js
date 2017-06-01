import { 
  PRESS_NUMERIC_BUTTON, 
  REMOVE_TYPED_DIGIT, 
  ADD_GUESS,
  ADD_SCORE 
} from '../constants/ActionTypes'

const typedDigits = (state = [], action) => {
  switch (action.type) {
    case PRESS_NUMERIC_BUTTON:
      if (action.isDigitAvailable === true) {
        return [
          ...state,
          action.numeral
        ]
      }
      return state
    case REMOVE_TYPED_DIGIT:
      return state.filter((numeral) => {
        return numeral !== action.numeral
      })
    case ADD_GUESS:
    case ADD_SCORE:
      return []
    default:
      return state
  }
}

export default typedDigits