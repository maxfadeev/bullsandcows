import { combineReducers } from 'redux'

import choices from './choices'
import score from './score'
import guess from './guess'
import secret from './secret'
import rivalGuess from './rivalGuess'
import rivalScore from './rivalScore'

export default combineReducers({
  choices,
  score,
  guess,
  secret,
  rivalGuess,
  rivalScore
})