import { connect } from 'react-redux'

import ScoreButton from '../components/ScoreButton'
import { makeGuess, calculateScore, pressScoreButton } from '../actions/scores'
import { 
  GUESS_TURN, 
  SCORE_TURN, 
  GUESS_DIGITS_LENGTH, 
  SCORE_DIGITS_LENGTH 
} from '../constants/Game'

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    isScoreButtonAvailable: (      
      (
        state.turn === GUESS_TURN 
        && state.typedDigits.length === GUESS_DIGITS_LENGTH
      )
      || (
        state.turn === SCORE_TURN 
        && state.typedDigits.length === SCORE_DIGITS_LENGTH
      )
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (turn) => {
      if (turn === GUESS_TURN) dispatch(makeGuess())
      if (turn === SCORE_TURN) dispatch(calculateScore())
      dispatch(pressScoreButton())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreButton)