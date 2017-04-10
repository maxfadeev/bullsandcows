import reducer from './guessDigits'
import * as types from '../constants/ActionTypes'

describe('guessDigits reducer', () => {
  it('should handle CLICK_NUMERIC_BUTTON and change state if a digit is available', () => {
    const numeral = 1
    expect(
      reducer(
        [], 
        {
          type: types.CLICK_NUMERIC_BUTTON,
          numeral
        }
      )
    ).toEqual([numeral])
  })

  it('should handle CLICK_NUMERIC_BUTTON and not change state if a digit is not available ', () => {
    const numeral = 1
    expect(
      reducer(
        [], 
        {
          type: types.CLICK_NUMERIC_BUTTON,
          numeral
        },
        false
      )
    ).toEqual([])
  })

  it('should handle CLICK_GUESS_DIGIT', () => {
    const numeral = 1
    expect(
      reducer(
        [1], 
        {
          type: types.CLICK_GUESS_DIGIT,
          numeral
        }
      )
    ).toEqual([])
  })
})