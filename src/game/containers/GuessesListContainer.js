import { connect } from 'react-redux'

import GuessesList from '../components/GuessesList'

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses
  }
}

export default connect(
  mapStateToProps
)(GuessesList)