import { connect } from 'react-redux'

import ResultsList from '../components/ResultsList'

import * as statuses from '../constants/Statuses'

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses,
    scores: state.scores,
    isSuccess: state.ai.status === statuses.SUCCESS
  }
}

export default connect(
  mapStateToProps
)(ResultsList)