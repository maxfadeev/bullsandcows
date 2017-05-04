import { combineReducers } from 'redux'

import typedDigits from './typedDigits'
import scores from './scores'
import guesses from './guesses'
import turn from './turn'
import guesser from './guesser'

export default combineReducers({
  typedDigits,
  scores,
  guesses,
  turn,
  guesser
})