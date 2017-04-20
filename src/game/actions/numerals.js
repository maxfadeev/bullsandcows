export const clickNumericButton = (numeral, isScoreAvailable) => {
  return {
    type: 'CLICK_NUMERIC_BUTTON',
    numeral,
    isScoreAvailable
  }
}

export const clickGuessDigit = (numeral) => {
  return {
    type: 'CLICK_GUESS_DIGIT',
    numeral
  }
}

export const clickScoreDigit = (key) => {
  return {
    type: 'CLICK_SCORE_DIGIT',
    key
  }
}