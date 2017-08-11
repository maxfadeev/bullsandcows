import { connect } from 'react-redux'

import ResultsList from '../components/ResultsList'

const mapStateToProps = ({ game: { guesses, scores } }) => ({
  guesses,
  scores
})

export default connect(mapStateToProps)(ResultsList)
