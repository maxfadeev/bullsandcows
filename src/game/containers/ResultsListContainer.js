import { connect } from 'react-redux'

import ResultsList from '../components/ResultsList'

const mapStateToProps = (state) => {
  return {
    guesses: state.game.guesses,
    scores: state.game.scores
  }
}

export default connect(
  mapStateToProps
)(ResultsList)