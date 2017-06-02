import * as actions from './numerals'
import * as types from '../constants/ActionTypes'
import {
  GUESS_TURN,
  SCORE_TURN,
  GUESS_LENGTH,
  SCORE_LENGTH,
  SUB
} from '../constants/Game'

describe('press numeric button action in a guess turn', () => {
  it('schould create the action to press numeric button', () => {
    const numeral = 7
    const typedDigits = Array(GUESS_LENGTH).fill(SUB)
    expect(actions.pressNumericButton(numeral, typedDigits, GUESS_TURN))
      .toEqual({
        type: types.PRESS_NUMERIC_BUTTON,
        numeral,
        isDigitAvailable: true
      })
  })

  it('should mark that the numeral is available', () => {
    const numeral = 7
    const typedDigits = Array(GUESS_LENGTH).fill(SUB)
    expect(actions.pressNumericButton(numeral, typedDigits, GUESS_TURN).isDigitAvailable)
      .toEqual(true)
  })

  it('should mark that the numeral is available in case of a count of the numerals is less then 4', () => {
    const numeral = 4
    const typedDigits = [1, 2, 3, SUB]
    expect(actions.pressNumericButton(numeral, typedDigits, GUESS_TURN).isDigitAvailable)
      .toEqual(true)
  })

  it('should mark that the "0" numeral is not available in the beginning of the guess turn', () => {
    // zero numeral is not available in the beginning of the guess turn
    const numeral = 0
    const typedDigits = Array(GUESS_LENGTH).fill(SUB)
    expect(actions.pressNumericButton(numeral, typedDigits, GUESS_TURN).isDigitAvailable)
      .toEqual(false)
  })

  it('should mark that the same, already typed, numeral is not available in the guess turn', () => {
    const numeral = 1
    const typedDigits = [1, SUB, SUB, SUB]
    expect(actions.pressNumericButton(numeral, typedDigits, GUESS_TURN).isDigitAvailable)
      .toEqual(false)
  })

  it('should mark that a count of numerals must not be more than 4 in the guess turn', () => {
    const numeral = 5
    const typedDigits = [1, 2, 3, 4]
    expect(actions.pressNumericButton(numeral, typedDigits, GUESS_TURN).isDigitAvailable)
      .toEqual(false)
  })
})

describe('press numeric button action in a score turn', () => {
  it('should mark that the numeral is available, even if the first numeral is zero in the score turn', () => {
    const numeral = 0
    const typedDigits = Array(SCORE_LENGTH).fill(SUB)
    expect(actions.pressNumericButton(numeral, typedDigits, SCORE_TURN))
      .toEqual({
        type: types.PRESS_NUMERIC_BUTTON,
        numeral,
        isDigitAvailable: true
      })
  })

  it('should mark that the numeral is available, even if the numeral already exists in the score turn', () => {
    const numeral = 2
    const typedDigits = [2, SUB]
    expect(actions.pressNumericButton(numeral, typedDigits, SCORE_TURN).isDigitAvailable)
      .toEqual(true)
  })

  it('should mark that the numeral is not available if a sum of numeral is more than 4', () => {
    const numeral = 2
    const typedDigits = [3]
    expect(actions.pressNumericButton(numeral, typedDigits, SCORE_TURN).isDigitAvailable)
      .toEqual(false)
  })

  it('should mark that the numeral is not available if the numeral is more than 4', () => {
    const numeral = 5
    const typedDigits = []
    expect(actions.pressNumericButton(numeral, typedDigits, SCORE_TURN).isDigitAvailable)
      .toEqual(false)
  })
})

describe('remove typed digit action', () => {
  it('schould create the action to remove the typed digit', () => {
    const numeral = 3
    expect(actions.removeTypedDigit(numeral)).toEqual({
      type: types.REMOVE_TYPED_DIGIT,
      numeral
    })
  })
})