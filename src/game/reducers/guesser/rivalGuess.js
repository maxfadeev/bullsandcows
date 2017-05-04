import { PRESS_SCORE_BUTTON } from '../../constants/ActionTypes'
import { GUESS_TURN } from '../../constants/Main'

const rivalGuess = (state = [], action) => {
  if (action.type === PRESS_SCORE_BUTTON && action.turn === GUESS_TURN) {
    return [...action.typedDigits]
  }

  return state
}

export default rivalGuess