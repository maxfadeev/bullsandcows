import { 
  ADD_SCORE,
  ADD_GUESS 
} from '../constants/ActionTypes'

export const addScore = (player1Score, player2Score) => {
  return {
    type: ADD_SCORE,
    player1Score,
    player2Score
  }
}

export const addGuess = (player1Guess, player2Guess) => {
  return {
    type: ADD_GUESS,
    player1Guess,
    player2Guess
  }
}