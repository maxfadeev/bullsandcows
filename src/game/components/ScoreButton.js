import React from 'react'
import '../styles/scoreButton.css'

const ScoreButton = ({
  onClick, 
  turn, 
  player1TypedDigits,
  player2TypedDigits,
  isScoreButtonAvailable
}) => {
  if (isScoreButtonAvailable === false) {
    return <span className="score-button-stub disable-select">Score</span>
  }
  return (
    <a href="#"
      className="score-button disable-select"
      onClick={(e) => {
        e.preventDefault()
        onClick(turn, player1TypedDigits, player2TypedDigits)
      }}
    >
      Score
    </a>
  )
}

export default ScoreButton