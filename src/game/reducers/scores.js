import { ADD_SCORE } from '../constants/ActionTypes'

const scores = (state = [], action) => {
  switch (action.type) {
    case ADD_SCORE:
      return [
        ...state,
        {
          player1: action.player1Score,
          player2: action.player2Score
        }
      ]
    default:
      return state
  }
}

export default scores