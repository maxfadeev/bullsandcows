import { connect } from 'react-redux'

import ScoreButton from '../components/ScoreButton'
import { clickScoreButton } from '../actions/numerals'

const mapStateToProps = (state) => {
  return {
    guessDigits: state.numerals.guessDigits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (guessDigits) => {
      dispatch(clickScoreButton(guessDigits))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreButton)