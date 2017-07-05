import reducer from './guesses'
import * as types from '../constants/ActionTypes'

describe('guesses reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      player1: [],
      player2: []
    })
  })

  it('should handle ADD_GUESS', () => {
    expect(reducer({
      player1: [],
      player2: []
    }, {
      type: types.ADD_GUESS,
      player1: [1, 2, 3, 4],
      player2: [5, 6, 7, 8]
    })).toEqual({
      player1: [[1, 2, 3, 4]],
      player2: [[5, 6, 7, 8]]
    })
  })
})