import React from 'react'

import { GUESS_DIGITS_LENGTH } from '../constants/Main'

const ScoreButton = ({onClick, guessDigits}) => {
  if (guessDigits.length < GUESS_DIGITS_LENGTH) {
    return <span>Score</span>
  }
  return (
    <a href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick(guessDigits)
      }}
    >
      Score
    </a>
  )
}

export default ScoreButton