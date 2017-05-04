import { GUESSER_CALCULATE_SCORE } from '../../constants/ActionTypes'

const score = (state = [], action) => {
  if (action.type === GUESSER_CALCULATE_SCORE) {
    return [...action.score]
  }

  return state
}

export default score