import numericButtons from './numericButtons'
import guessDigits from './guessDigits'
import scores from './scores'
import { CLICK_NUMERIC_BUTTON, CLICK_GUESS_DIGIT, CLICK_SCORE_BUTTON } from '../constants/ActionTypes'
import { GUESS_DIGITS_LENGTH } from '../constants/Main'

const numerals = (state, action) => {
  if (typeof state === 'undefined') {
    return {
      numericButtons: numericButtons(undefined, action),
      guessDigits: guessDigits(undefined, action),
      scores: scores(undefined, action)
    }
  }

  const isDigitAvailable = !(
    state.guessDigits.length === GUESS_DIGITS_LENGTH 
    || state.guessDigits.includes(action.numeral)
    || (state.guessDigits.length === 0 && action.numeral === 0)
  )
  
  switch (action.type) {
    case CLICK_NUMERIC_BUTTON:
    case CLICK_GUESS_DIGIT:
      return Object.assign({}, state, {
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
      })
    case CLICK_SCORE_BUTTON:
      if (state.guessDigits.length === GUESS_DIGITS_LENGTH) {
        return {
          numericButtons: numericButtons(undefined, action),
          guessDigits: guessDigits(undefined, action),
          scores: scores(state.scores, action)
        }
      }
      return state
    default:
      return state
  }
}

export default numerals