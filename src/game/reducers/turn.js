import { GUESS_TURN, SCORE_TURN } from '../constants/Game'
import { PRESS_SCORE_BUTTON } from '../constants/ActionTypes'

const turn = (state = GUESS_TURN, action) => {
  if (action.type === PRESS_SCORE_BUTTON) {
    return state === GUESS_TURN ? SCORE_TURN : GUESS_TURN
  }
  return state
}

export default turn