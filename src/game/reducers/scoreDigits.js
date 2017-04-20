import { CLICK_NUMERIC_BUTTON, CLICK_SCORE_DIGIT } from '../constants/ActionTypes'

const scoreDigits = (state = [], action, isDigitAvailable = true) => {
  switch (action.type) {
    case CLICK_NUMERIC_BUTTON:
      if (isDigitAvailable === true && action.isScoreAvailable === true) {
        return [
          ...state,
          action.numeral
        ]
      }
      return state
    case CLICK_SCORE_DIGIT:
      return state.filter((n, key) => {
        return key !== action.key
      })
    default:
      return state
  }
}

export default scoreDigits