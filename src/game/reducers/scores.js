import { APPEND_SCORES } from '../constants/ActionTypes'

const scores = (state = [], action) => {
  switch (action.type) {
    case APPEND_SCORES:
      return [
        ...state,
        {
          player1: action.player1,
          player2: action.player2
        }
      ]
    default:
      return state
  }
}

export default scores