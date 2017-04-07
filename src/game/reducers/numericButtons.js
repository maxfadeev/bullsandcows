import { NUMERALS } from '../constants/Main'
import { CLICK_NUMERIC_BUTTON, CLICK_GUESS_DIGIT } from '../constants/ActionTypes'

const numericButtons = (state, action, isDigitAvailable) => {
  if (typeof state === 'undefined') {
    return NUMERALS.map((numeral) => {
      return {
        numeral,
        choosen: false
      }
    })
  }

  switch (action.type) {
    case CLICK_NUMERIC_BUTTON:
      return state.map((numericButton) => {
        if (
          numericButton.numeral === action.numeral 
          && isDigitAvailable === true
        ) {
          return Object.assign({}, numericButton, {choosen: true})  
        }
        return numericButton
      })
    case CLICK_GUESS_DIGIT:
      return state.map((numericButton) => {
        if (numericButton.numeral === action.numeral) {
          return Object.assign({}, numericButton, {choosen: false})  
        }
        return numericButton
      })
    default:
      return state
  }
}

export default numericButtons