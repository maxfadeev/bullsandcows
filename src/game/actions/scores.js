import { 
  ADD_SCORE,
  ADD_GUESS 
} from '../constants/ActionTypes'

export const addScore = (player1, player2) => {
  return {
    type: ADD_SCORE,
    player1,
    player2
  }
}

export const addGuess = (player1, player2) => {
  return {
    type: ADD_GUESS,
    player1,
    player2
  }
}