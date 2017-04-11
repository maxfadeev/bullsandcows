export const clickNumericButton = (numeral) => {
  return {
    type: 'CLICK_NUMERIC_BUTTON',
    numeral
  }
}

export const clickGuessDigit = (numeral) => {
  return {
    type: 'CLICK_GUESS_DIGIT',
    numeral
  }
}

export const clickScoreButton = (guessDigits) => {
  return {
    type: 'CLICK_SCORE_BUTTON',
    guessDigits
  }
}