import { combineReducers } from 'redux'

import typedDigits from './typedDigits'
import scores from './scores'
import turn from './turn'

export default combineReducers({
  typedDigits,
  scores,
  turn
})