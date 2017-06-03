import * as actions from './scores'
import * as types from '../constants/ActionTypes'

describe('scores actions', () => {
  it('should create an action to add a score', () => {
    const player1 = [1, 1]
    const player2 = [1, 1]
    expect(actions.addScore(player1, player2)).toEqual({
      type: types.ADD_SCORE,
      player1,
      player2
    })
  })

  it('should create an action to add a guess', () => {
    const player1 = [1, 2, 3, 4]
    const player2 = [1, 2, 3, 4]
    expect(actions.addGuess(player1, player2)).toEqual({
      type: types.ADD_GUESS,
      player1,
      player2
    })
  })
}) 