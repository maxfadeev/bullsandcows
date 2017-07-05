import reducer from './turn'
import * as types from '../constants/ActionTypes'
import { GUESS_TURN, SCORE_TURN } from '../constants/Game'

describe('turn reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(GUESS_TURN)
  })

  it('should return SCORE_TURN', () => {
    expect(reducer(GUESS_TURN, {
      type: types.ADD_GUESS
    })).toEqual(SCORE_TURN)
  })

  it('should return GUESS_TURN', () => {
    expect(reducer(GUESS_TURN, {
      type: types.ADD_SCORE
    })).toEqual(GUESS_TURN)
  })
})