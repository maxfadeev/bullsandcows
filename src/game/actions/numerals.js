import { PRESS_NUMERIC_BUTTON, REMOVE_TYPED_DIGIT} from '../constants/ActionTypes'
import { 
  GUESS_TURN, 
  SCORE_TURN, 
  GUESS_LENGTH, 
  SCORE_LENGTH 
} from '../constants/Game'

export const pressNumericButton = (numeral, typedDigits, turn) => {
  const isDigitAvailable = !(
    (
      turn === GUESS_TURN 
      && (
        (typedDigits.length === 0 && numeral === 0)
        || typedDigits.includes(numeral)
        || typedDigits.length === GUESS_LENGTH
      )
    )
    || (
      turn === SCORE_TURN
      && (
        numeral > GUESS_LENGTH
        || typedDigits.length === SCORE_LENGTH
        || (
          typedDigits.length > 0
          && typedDigits.reduce((a, b) => a + b, 0) + numeral > GUESS_LENGTH
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