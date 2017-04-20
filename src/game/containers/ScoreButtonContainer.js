import { connect } from 'react-redux'

import ScoreButton from '../components/ScoreButton'
import { clickScoreButton } from '../actions/scores'

const mapStateToProps = (state) => {
  return {
    guessDigits: state.numerals.guessDigits,
    scoreDigits: state.numerals.scoreDigits,
    isScoreAvailable: (state.scores.length > 0)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (guessDigits, scoreDigits) => {
      dispatch(clickScoreButton(guessDigits, scoreDigits))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreButton)