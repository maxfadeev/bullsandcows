import { connect } from 'react-redux'

import NumericButtonsList from '../components/NumericButtonsList'
import { clickNumericButton } from '../actions'

const mapStateToProps = (state) => {
  return {
    numericButtons: state.numerals.numericButtons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNumericButtonClick: (numeral) => {
      dispatch(clickNumericButton(numeral))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumericButtonsList)