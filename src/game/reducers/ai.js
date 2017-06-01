import { ADD_SCORE, ADD_GUESS } from '../constants/ActionTypes'
import * as statuses from '../constants/Statuses' 

import { createSecret, getChoices, getGuess, getScore } from '../api/ai'

function getDefaultState() {
  const choices = getChoices()
  return {
    secret: createSecret(),
    choices,
    typedDigits: getGuess(choices),
    status: statuses.SUCCESS
  }
}

const ai = (state = getDefaultState(), action) => {
  switch (action.type) {
    case ADD_GUESS:
      return Object.assign({}, state, {
        typedDigits: getScore(action.player1Guess, state.secret)
      })
    case ADD_SCORE:
      const choices = getChoices(
        state.choices, 
        getGuess(state.choices), 
        action.player1Score
      ) 
      if (choices.length === 0) {
        return Object.assign({}, state, {
          choices,
          status: statuses.OPPONENT_MISTAKE
        })  
      }
      return Object.assign({}, state, {
        choices,
        typedDigits: getGuess(choices)
      })
    default:
      return state
  }
}

export default ai