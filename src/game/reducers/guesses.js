import { ADD_GUESS } from '../constants/ActionTypes'

const guesses = (state = [], action) => {
  switch (action.type) {
    case ADD_GUESS:
      return [
        ...state,
        {
          player1: action.player1Guess,
          player2: action.player2Guess
        }
      ]
    default:
      return state
  }
}

export default guesses