import { connect } from 'react-redux'

import ResultsList from '../components/ResultsList'

const mapStateToProps = (state) => {
  return {
    guesses: state.game.guesses,
    scores: state.game.scores,
    status: state.game.ai.status
  }
}

export default connect(
  mapStateToProps
)(ResultsList)