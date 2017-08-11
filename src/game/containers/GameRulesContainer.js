import { connect } from 'react-redux'

import GameRules from '../components/GameRules'
import { toggleRulesVisibility } from '../actions/game'

const mapStateToProps = ({ game: { rulesVisibility: isTextVissible } }) => ({
  visibilityLinkText: isTextVissible ? 'Hide' : 'Show',
  isTextVissible
})

const mapDispatchToProps = dispatch => {
  return {
    onClick() {
      dispatch(toggleRulesVisibility())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameRules)
