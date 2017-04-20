import { connect } from 'react-redux'

import Score from '../components/Score'
import { clickScoreDigit } from '../actions/numerals'

const mapStateToProps = (state) => {
  return {
    scoreDigits: state.numerals.scoreDigits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onScoreDigitClick: (key) => {
      dispatch(clickScoreDigit(key))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score)