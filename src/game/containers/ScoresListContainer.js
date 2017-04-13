import { connect } from 'react-redux'

import ScoresList from '../components/ScoresList'

const mapStateToProps = (state) => {
  return {
    scores: state.scores
  }
}

export default connect(
  mapStateToProps
)(ScoresList)