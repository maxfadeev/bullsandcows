import { ADD_SCORE, ADD_GUESS } from '../constants/ActionTypes'
import { GUESS_LENGTH } from '../constants/Game'
import * as status from '../constants/Status' 

import { createSecret, getChoices, getGuess, getScore } from '../api/ai'

function getDefaultState() {
  const choices = getChoices()
  return {
    secret: createSecret(),
    choices,
    typedDigits: getGuess(choices),
    status: status.GAME_CONTINUES
  }
}

const ai = (state = getDefaultState(), action) => {
  switch (action.type) {
    case ADD_GUESS:
      const score = getScore(action.player1, state.secret)
      if (score[0] === GUESS_LENGTH) {
        return Object.assign({}, state, {
          status: status.OPPONENT_WIN
        })  
      }
      return Object.assign({}, state, {
        typedDigits: score
      })
    case ADD_SCORE:
      if (action.player1[0] === GUESS_LENGTH) {
        return Object.assign({}, state, {
          status: status.OPPONENT_LOSE
        })
      }  
      const choices = getChoices(
        state.choices, 
        getGuess(state.choices), 
        action.player1
      ) 
      if (choices.length === 0) {
        return Object.assign({}, state, {
          choices,
          status: status.OPPONENT_MISTAKE
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