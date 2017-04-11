import { CLICK_SCORE_BUTTON } from '../constants/ActionTypes'

const scores = (state = [], action) => {
  switch (action.type) {
    case CLICK_SCORE_BUTTON:
      return [
        ...state,
        action.guessDigits
      ]
    default:
      return state
  }
}

export default scores