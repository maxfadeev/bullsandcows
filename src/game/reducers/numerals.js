import numericButtons from './numericButtons'
import guessDigits from './guessDigits'
import scoreDigits from './scoreDigits'
import { 
  CLICK_NUMERIC_BUTTON, 
  CLICK_GUESS_DIGIT, 
  CLICK_SCORE_BUTTON, 
  CLICK_SCORE_DIGIT 
} from '../constants/ActionTypes'
import { GUESS_DIGITS_LENGTH, SCORE_DIGITS_LENGTH } from '../constants/Main'

function getInitialState() {
  return {
    numericButtons: numericButtons(undefined, {}),
    guessDigits: guessDigits(undefined, {}),
    scoreDigits: scoreDigits(undefined, {})
  }  
}

const numerals = (state = getInitialState(), action) => {
  const isGuessDigitAvailable = !(
    state.guessDigits.length === GUESS_DIGITS_LENGTH 
    || state.guessDigits.includes(action.numeral)
    || (state.guessDigits.length === 0 && action.numeral === 0)
  )
  const isScoreDigitAvailable = (
    state.guessDigits.length === GUESS_DIGITS_LENGTH
    && action.numeral <= GUESS_DIGITS_LENGTH
    && state.scoreDigits.length < SCORE_DIGITS_LENGTH
    && (
      typeof state.scoreDigits[0] === 'undefined' 
      || (Number(state.scoreDigits[0]) + Number(action.numeral)) <= GUESS_DIGITS_LENGTH
    )
  )
  
  switch (action.type) {
    case CLICK_NUMERIC_BUTTON:
    case CLICK_GUESS_DIGIT:
    case CLICK_SCORE_DIGIT:
      return {
        numericButtons: numericButtons(
          state.numericButtons, 
          action,
          isGuessDigitAvailable
        ),
        guessDigits: guessDigits(
          state.guessDigits, 
          action,
          isGuessDigitAvailable
        ),
        scoreDigits: scoreDigits(
          state.scoreDigits,
          action,
          isScoreDigitAvailable
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