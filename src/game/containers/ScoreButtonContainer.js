import { connect } from 'react-redux'

import ScoreButton from '../components/ScoreButton'
import { addGuess, addScore } from '../actions/scores'
import { 
  GUESS_TURN, 
  SCORE_TURN, 
  GUESS_DIGITS_LENGTH, 
  SCORE_DIGITS_LENGTH 
} from '../constants/Game'

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    // typed digits may be guess or score digits
    player1TypedDigits: state.typedDigits,
    player2TypedDigits: state.ai.typedDigits,
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
    onClick: (turn, player1TypedDigits, player2TypedDigits) => {
      if (turn === GUESS_TURN) dispatch(addGuess(player1TypedDigits, player2TypedDigits))
      if (turn === SCORE_TURN) dispatch(addScore(player1TypedDigits, player2TypedDigits))  
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreButton)