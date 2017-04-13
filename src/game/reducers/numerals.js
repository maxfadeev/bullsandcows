import numericButtons from './numericButtons'
import guessDigits from './guessDigits'
import { CLICK_NUMERIC_BUTTON, CLICK_GUESS_DIGIT, CLICK_SCORE_BUTTON } from '../constants/ActionTypes'
import { GUESS_DIGITS_LENGTH } from '../constants/Main'

function getInitialState() {
  return {
    numericButtons: numericButtons(undefined, {}),
    guessDigits: guessDigits(undefined, {})
  }  
}

const numerals = (state = getInitialState(), action) => {
  const isDigitAvailable = !(
    state.guessDigits.length === GUESS_DIGITS_LENGTH 
    || state.guessDigits.includes(action.numeral)
    || (state.guessDigits.length === 0 && action.numeral === 0)
  )
  
  switch (action.type) {
    case CLICK_NUMERIC_BUTTON:
    case CLICK_GUESS_DIGIT:
      return {
        numericButtons: numericButtons(
          state.numericButtons, 
          action,
          isDigitAvailable
        ),
        guessDigits: guessDigits(
          state.guessDigits, 
          action,
          isDigitAvailable
        )
      }
    case CLICK_SCORE_BUTTON:
      if (action.guessDigits.length === GUESS_DIGITS_LENGTH) {
        return getInitialState()  
      }
      return state
    default:
      return state
  }
}

export default numerals