import reducer from './numericButtons'
import * as types from '../constants/ActionTypes'
import { NUMERALS } from '../constants/Main'

describe('numericButtons reducer', () => {
  it('should return the initial state', () => {
    const initialState = NUMERALS.map((numeral) => {
      return {
        numeral,
        choosen: false
      }
    })
    expect(
      reducer(undefined, {})
    ).toEqual(initialState)  
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

  it('should handle CLICK_NUMERIC_BUTTON and change state if a digit is available', () => {
    const initialState = NUMERALS.map((numeral) => {
      return {
        numeral,
        choosen: false
      }
    })
    const clickedNumeral = 1
    const stateToEqual = NUMERALS.map((numeral) => {
      if (numeral === clickedNumeral) {
        return {
          numeral,
          choosen: true
        }
      }
      return {
        numeral,
        choosen: false
      }
    })
    expect(
      reducer(
        initialState, 
        {
          type: types.CLICK_NUMERIC_BUTTON,
          numeral: clickedNumeral
        }
      )
    ).toEqual(stateToEqual)  
  }) 

  it('should handle CLICK_GUESS_DIGIT', () => {
    const initialState = NUMERALS.map((numeral) => {
      return {
        numeral,
        choosen: false
      }
    })
    const clickedNumeral = 1
    const state = NUMERALS.map((numeral) => {
      if (numeral === clickedNumeral) {
        return {
          numeral,
          choosen: true
        }
      }
      return {
        numeral,
        choosen: false
      }
    })
    expect(
      reducer(
        state, 
        {
          type: types.CLICK_GUESS_DIGIT,
          numeral: clickedNumeral
        }
      )
    ).toEqual(initialState)  
  })
})