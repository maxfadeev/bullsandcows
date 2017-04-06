import { CLICK_NUMERIC_BUTTON, CLICK_GUESS_DIGIT } from '../constants/ActionTypes'
import { GUESS_DIGITS_LENGTH } from '../constants/Main'

const guessDigits = (state = [], action) => {
  switch (action.type) {
    case CLICK_NUMERIC_BUTTON:
      if (state.length === 0 && action.numeral === 0) {
        return state
      }
      if (state.length < GUESS_DIGITS_LENGTH && !state.includes(action.numeral)) {
        return [
          ...state,
          action.numeral
        ]
      }
      return state
    case CLICK_GUESS_DIGIT:
      return state.filter((n) => {
        return n !== action.numeral
      })
    default:
      return state
  }
}

export default guessDigits