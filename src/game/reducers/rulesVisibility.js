import { TOGGLE_RULES_VISIBILITY } from '../constants/ActionTypes'

const rulesVisibility = (state = false, action) => {
  if (action.type === TOGGLE_RULES_VISIBILITY) {
    return !state
  }

  return state
}

export default rulesVisibility