import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import { removeTypedDigit } from '../actions/numerals'

const mapStateToProps = (state) => {
  return {
    typedDigits: state.typedDigits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveTypedDigit: (numeral) => {
      dispatch(removeTypedDigit(numeral))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypedDigitsList)