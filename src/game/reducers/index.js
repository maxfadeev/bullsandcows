import { combineReducers } from 'redux'

import numerals from './numerals'
import scores from './scores'

export default combineReducers({
  numerals,
  scores
})