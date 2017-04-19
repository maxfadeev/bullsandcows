import { CLICK_NUMERIC_BUTTON, CLICK_SCORE_DIGIT } from '../constants/ActionTypes'

const scoreDigits = (state = [], action, isDigitAvailable = true) => {
  switch (action.type) {
    case CLICK_NUMERIC_BUTTON:
      if (isDigitAvailable === true) {
        return [
          ...state,
          action.numeral
        ]
      }
      return state
    case CLICK_SCORE_DIGIT:
      return state.filter((numeral) => {
        return numeral !== action.numeral
      })
    default:
      return state
  }
}

export default scoreDigits