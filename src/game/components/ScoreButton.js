import React from 'react'

import { GUESS_TURN } from '../constants/Game'

import '../styles/scoreButton.css'

const ScoreButton = ({
  onClick, 
  turn, 
  player1TypedDigits,
  player2TypedDigits,
  isScoreButtonAvailable
}) => {
  const text = turn === GUESS_TURN ? 'Guess' : 'Score'
  if (isScoreButtonAvailable === false) {
    return <span className="score-button-stub disable-select">{text}</span>
  }
  return (
    <a href="#"
      className="score-button disable-select"
      onClick={(e) => {
        e.preventDefault()
        onClick(turn, player1TypedDigits, player2TypedDigits)
      }}
    >
      {text}
    </a>
  )
}

export default ScoreButton