import { APPEND_SCORES } from '../../constants/ActionTypes'

const rivalScore = (state = [], action) => {
  if (action.type === APPEND_SCORES) {
    return [...action.player1]
  }

  return state
}

export default rivalScore