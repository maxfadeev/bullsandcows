import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import { removeTypedDigit } from '../actions/numerals'
import { SCORE_TURN } from '../constants/Game'

const mapStateToProps = (state) => {
  return {
    typedDigits: state.game.typedDigits,
    isScoreTurn: state.game.turn === SCORE_TURN
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveTypedDigit: (numeral, key) => {
      dispatch(removeTypedDigit(numeral, key))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypedDigitsList)