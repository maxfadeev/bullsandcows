import { APPEND_GUESSES } from '../constants/ActionTypes'

const guesses = (state = [], action) => {
  switch (action.type) {
    case APPEND_GUESSES:
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

export default guesses