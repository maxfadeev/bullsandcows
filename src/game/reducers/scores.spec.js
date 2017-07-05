import reducer from './scores'
import * as types from '../constants/ActionTypes'

describe('scores reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      player1: [],
      player2: []
    })
  })

  it('should handle ADD_SCORE', () => {
    expect(reducer({
      player1: [],
      player2: []
    }, {
      type: types.ADD_SCORE,
      player1: [1, 0],
      player2: [2, 1]
    })).toEqual({
      player1: [[1, 0]],
      player2: [[2, 1]]
    })
  })
})