import reducer from './scoreDigits'
import * as types from '../constants/ActionTypes'

describe('scoreDigits reducer', () => {
  it('should handle CLICK_NUMERIC_BUTTON and change state if a score and the score digit are available', () => {
    const numeral = 2
    expect(
      reducer(
        [],
        {
          type: types.CLICK_NUMERIC_BUTTON,
          numeral,
          isScoreAvailable: true
        }
      )
    ).toEqual([numeral])
  })

  it('should handle CLICK_NUMERIC_BUTTON and not change state if a score or the score digit are not available', () => {
    const numeral = 2
    expect(
      reducer(
        [],
        {
          type: types.CLICK_NUMERIC_BUTTON,
          numeral,
          isScoreAvailable: false
        }
      )
    ).toEqual([])
    expect(
      reducer(
        [],
        {
          type: types.CLICK_NUMERIC_BUTTON,
          numeral,
          isScoreAvailable: true
        },
        false
      )
    ).toEqual([])
  })

  it('should handle CLICK_SCORE_DIGIT', () => {
    const key = 0
    expect(
      reducer(
        [1, 2], 
        {
          type: types.CLICK_SCORE_DIGIT,
          key
        }
      )
    ).toEqual([2])
  })
})