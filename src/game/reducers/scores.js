import { ADD_SCORE } from '../constants/ActionTypes'

function getDefaultState() {
  return {
    player1: [],
    player2: []
  }
}

const scores = (state = getDefaultState(), action) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        player1: [...state.player1, action.player1],
        player2: [...state.player2, action.player2],
      }
    default:
      return state
  }
}

export default scores