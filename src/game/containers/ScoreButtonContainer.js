import { connect } from 'react-redux'

import ScoreButton from '../components/ScoreButton'
import { pressScoreButton } from '../actions/scores'
import { 
  GUESS_TURN, 
  SCORE_TURN, 
  GUESS_DIGITS_LENGTH, 
  SCORE_DIGITS_LENGTH 
} from '../constants/Main'

const mapStateToProps = (state) => {
  return {
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
    onClick: () => {
      dispatch(pressScoreButton())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreButton)