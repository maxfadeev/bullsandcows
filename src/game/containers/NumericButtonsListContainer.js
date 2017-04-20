import { connect } from 'react-redux'

import NumericButtonsList from '../components/NumericButtonsList'
import { clickNumericButton } from '../actions/numerals'

const mapStateToProps = (state) => {
  return {
    numericButtons: state.numerals.numericButtons,
    isScoreAvailable: state.scores.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNumericButtonClick: (numeral, isScoreAvailable) => {
      dispatch(clickNumericButton(numeral, isScoreAvailable))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumericButtonsList)