import * as actions from './index'
import * as types from '../constants/ActionTypes'

describe('actions', () => {
  it('it should create an action to indicate clicking the numeric button', () => {
    const numeral = 4
    const expectedAction = {
      type: types.CLICK_NUMERIC_BUTTON,
      numeral
    }
    expect(actions.clickNumericButton(numeral)).toEqual(expectedAction)
  })

  it('it should create an action to indicate clicking the guess digit', () => {
    const numeral = 1
    const expectedAction = {
      type: types.CLICK_GUESS_DIGIT,
      numeral
    }
    expect(actions.clickGuessDigit(numeral)).toEqual(expectedAction)
  })
})