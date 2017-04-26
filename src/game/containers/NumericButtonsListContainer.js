import { connect } from 'react-redux'

import NumericButtonsList from '../components/NumericButtonsList'
import { pressNumericButton } from '../actions/numerals'

const mapStateToProps = (state) => {
  return {
    typedDigits: state.typedDigits,
    turn: state.turn
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