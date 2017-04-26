import { PRESS_NUMERIC_BUTTON, REMOVE_TYPED_DIGIT} from '../constants/ActionTypes'
import { 
  GUESS_TURN, 
  SCORE_TURN, 
  GUESS_DIGITS_LENGTH, 
  SCORE_DIGITS_LENGTH 
} from '../constants/Main'

export const pressNumericButton = (numeral, typedDigits, turn) => {
  const isDigitAvailable = !(
    (
      turn === GUESS_TURN 
      && (
        (typedDigits.length === 0 && numeral === 0)
        || typedDigits.includes(numeral)
        || typedDigits.length === GUESS_DIGITS_LENGTH
      )
    )
    || (
      turn === SCORE_TURN
      && (
        numeral > GUESS_DIGITS_LENGTH
        || typedDigits.length === SCORE_DIGITS_LENGTH
        || (
          typedDigits.length > 0
          && typedDigits.reduce((a, b) => a + b, 0) + numeral > GUESS_DIGITS_LENGTH
        )
      )
    )
  )
  
  return {
    type: PRESS_NUMERIC_BUTTON,
    numeral,
    isDigitAvailable
  }
}

export const removeTypedDigit = (numeral) => {
  return {
    type: REMOVE_TYPED_DIGIT,
    numeral
  }
}