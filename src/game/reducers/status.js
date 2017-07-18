import { 
  GAME_CONTINUES, 
  PLAYER1_WIN, 
  PLAYER1_LOSE,
  PLAYER1_MISTAKE 
} from '../constants/GameStatuses'
import { ADD_SCORE, ADD_GUESS } from '../constants/ActionTypes'
import { GUESS_LENGTH } from '../constants/Game'

const status = (state = GAME_CONTINUES, action) => {
  if (action.type === ADD_SCORE) {
    if (action.player1[0] === GUESS_LENGTH) {
      return PLAYER1_LOSE
    }
    else if (action.player2[0] === GUESS_LENGTH) {
      return PLAYER1_WIN
    }
  }
  else if (action.type === ADD_GUESS) {
    if (action.player2.length === 0) {
      return PLAYER1_MISTAKE
    }  
  }
  
  return state
}

export default status