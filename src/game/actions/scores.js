import { PRESS_SCORE_BUTTON } from '../constants/ActionTypes'

export const pressScoreButton = (typedDigits) => {
  return {
    type: PRESS_SCORE_BUTTON,
    typedDigits
  }
}