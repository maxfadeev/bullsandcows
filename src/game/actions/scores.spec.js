import * as actions from './scores'
import * as types from '../constants/ActionTypes'

describe('scores actions', () => {
  it('should create an action to add a score', () => {
    const player1Score = [1, 1]
    const player2Score = [1, 1]
    expect(actions.addScore(player1Score, player2Score)).toEqual({
      type: types.ADD_SCORE,
      player1Score,
      player2Score
    })
  })

  it('should create an action to add a guess', () => {
    const player1Guess = [1, 2, 3, 4]
    const player2Guess = [1, 2, 3, 4]
    expect(actions.addGuess(player1Guess, player2Guess)).toEqual({
      type: types.ADD_GUESS,
      player1Guess,
      player2Guess
    })
  })
}) 