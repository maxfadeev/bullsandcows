import { connect } from 'react-redux'

import GameOver from '../components/GameOver'

const mapStateToProps = (state) => {
  return {
    status: state.game.status,
  }
}

export default connect(
  mapStateToProps
)(GameOver)