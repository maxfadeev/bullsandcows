import { connect } from 'react-redux'

import GameRules from '../components/GameRules'
import { toggleRulesVisibility } from '../actions/game'

const mapStateToProps = (state) => {
  const isTextVissible = state.game.rulesVisibility
  return {
    visibilityLinkText: isTextVissible ? 'Hide' : 'Show',
    isTextVissible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick() {
      dispatch(toggleRulesVisibility())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameRules)