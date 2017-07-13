import { TOGGLE_RULES_VISIBILITY } from '../constants/ActionTypes'

const rulesVisibility = (state = true, action) => {
  if (action.type === TOGGLE_RULES_VISIBILITY) {
    return !state
  }

  return state
}

export default rulesVisibility