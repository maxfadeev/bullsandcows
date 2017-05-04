import { GUESSER_DERIVE_CHOICES } from '../../constants/ActionTypes'

const choices = (state = [], action) => {
  if (action.type === GUESSER_DERIVE_CHOICES) {
    return [...action.choices]
  }

  return state
}

export default choices