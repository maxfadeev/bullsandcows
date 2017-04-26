import { PRESS_SCORE_BUTTON } from '../constants/ActionTypes'

const scores = (state = [], action) => {
  switch (action.type) {
    case PRESS_SCORE_BUTTON:
      return [
        ...state,
        {
          digits: action.typedDigits
        }
      ]
    default:
      return state
  }
}

export default scores