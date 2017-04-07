import numericButtons from './numericButtons'
import guessDigits from './guessDigits'
import { CLICK_NUMERIC_BUTTON, CLICK_GUESS_DIGIT } from '../constants/ActionTypes'
import { GUESS_DIGITS_LENGTH } from '../constants/Main'

const numerals = (state, action) => {
  if (typeof state === 'undefined') {
    return {
      numericButtons: numericButtons(undefined, action),
      guessDigits: guessDigits(undefined, action)
    }
  }
  
  switch (action.type) {
    case CLICK_NUMERIC_BUTTON:
      let isDigitAvailable = true
      if (
        state.guessDigits.length === GUESS_DIGITS_LENGTH 
        || state.guessDigits.includes(action.numeral)
        || (state.guessDigits.length === 0 && action.numeral === 0)
      ) {
        isDigitAvailable = false
      }
      return {
        numericButtons: numericButtons(state.numericButtons, action, isDigitAvailable),
        guessDigits: guessDigits(state.guessDigits, action, isDigitAvailable)
      }
    case CLICK_GUESS_DIGIT:
      return {
        numericButtons: numericButtons(state.numericButtons, action),
        guessDigits: guessDigits(state.guessDigits, action)
      }
    default:
      return state
  }
}

export default numerals