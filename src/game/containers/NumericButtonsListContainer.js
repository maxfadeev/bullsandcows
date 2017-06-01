import { connect } from 'react-redux'

import NumericButtonsList from '../components/NumericButtonsList'
import { pressNumericButton } from '../actions/numerals'

const mapStateToProps = (state) => {
  return {
    typedDigits: state.game.typedDigits,
    turn: state.game.turn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNumericButtonPress: (numeral, typedDigits, turn) => {
      dispatch(pressNumericButton(numeral, typedDigits, turn))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumericButtonsList)