import { connect } from 'react-redux'

import ResultsList from '../components/ResultsList'

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses,
    scores: state.scores
  }
}

export default connect(
  mapStateToProps
)(ResultsList)