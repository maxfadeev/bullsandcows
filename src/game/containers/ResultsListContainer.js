import { connect } from 'react-redux'

import ResultsList from '../components/ResultsList'

import * as statuses from '../constants/Statuses'

const mapStateToProps = (state) => {
  return {
    guesses: state.game.guesses,
    scores: state.game.scores,
    isSuccess: state.game.ai.status === statuses.SUCCESS
  }
}

export default connect(
  mapStateToProps
)(ResultsList)