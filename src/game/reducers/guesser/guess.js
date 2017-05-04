import { GUESSER_DEDUCE_GUESS } from '../../constants/ActionTypes'

const guess = (state = [], action) => {
  if (action.type === GUESSER_DEDUCE_GUESS) {
    return [...action.guess]
  }

  return state
}

export default guess