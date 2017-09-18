import { ADD_SCORE, ADD_GUESS } from '../constants/ActionTypes'

import { createSecret, getChoices, getGuess, getScore } from '../api/ai'

function getDefaultState() {
  const choices = getChoices()
  return {
    choices,
    secret: createSecret(),
    typedDigits: getGuess(choices)
  }
}

const ai = (state = getDefaultState(), action) => {
  switch (action.type) {
    case ADD_GUESS:
      const score = getScore(action.player1, state.secret)

      return {
        ...state,
        typedDigits: score
      }
    case ADD_SCORE:
      const choices = getChoices(
        state.choices,
        getGuess(state.choices),
        action.player1
      )
      if (choices.length === 0) {
        return {
          ...state,
          choices: [],
          typedDigits: []
        }
      }

      return {
        ...state,
        choices,
        typedDigits: getGuess(choices)
      }
    default:
      return state
  }
}

export default ai
