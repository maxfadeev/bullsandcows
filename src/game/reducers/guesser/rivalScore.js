import { PRESS_SCORE_BUTTON } from '../../constants/ActionTypes'
import { SCORE_TURN } from '../../constants/Game'

const rivalScore = (state = [], action) => {
  if (action.type === PRESS_SCORE_BUTTON && action.turn === SCORE_TURN) {
    return [...action.typedDigits]
  }

  return state
}

export default rivalScore