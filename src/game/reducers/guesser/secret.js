import { GUESSER_THINK_UP_SECRET } from '../../constants/ActionTypes'

const secret = (state = [], action) => {
  if (action.type === GUESSER_THINK_UP_SECRET) {
    return [...action.secret]
  }

  return state
}

export default secret