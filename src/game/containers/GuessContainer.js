import { connect } from 'react-redux'

import Guess from '../components/Guess'
import { clickGuessDigit } from '../actions'

const mapStateToProps = (state) => {
  return {
    guessDigits: state.numerals.guessDigits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGuessDigitClick: (numeral) => {
      dispatch(clickGuessDigit(numeral))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Guess)