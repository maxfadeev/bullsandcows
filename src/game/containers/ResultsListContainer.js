import { connect } from 'react-redux'

import ResultsList from '../components/ResultsList'

const mapStateToProps = ({ game: { guesses, scores, rulesVisibility } }) => ({
  guesses,
  scores,
  rulesVisibility
})

export default connect(mapStateToProps)(ResultsList)
