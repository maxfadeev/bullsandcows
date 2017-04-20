import React from 'react'

import { GUESS_DIGITS_LENGTH, SCORE_DIGITS_LENGTH } from '../constants/Main'

const ScoreButton = ({onClick, guessDigits, scoreDigits, isScoreAvailable}) => {
  if (
    guessDigits.length < GUESS_DIGITS_LENGTH
    || (isScoreAvailable === true && scoreDigits.length < SCORE_DIGITS_LENGTH)
  ) {
    return <span>Score</span>
  }
  return (
    <a href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick(guessDigits, scoreDigits)
      }}
    >
      Score
    </a>
  )
}

export default ScoreButton