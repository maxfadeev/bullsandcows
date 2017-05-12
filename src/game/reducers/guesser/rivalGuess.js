import { APPEND_GUESSES } from '../../constants/ActionTypes'

const rivalGuess = (state = [], action) => {
  if (action.type === APPEND_GUESSES) {
    return [...action.player1]
  }

  return state
}

export default rivalGuess