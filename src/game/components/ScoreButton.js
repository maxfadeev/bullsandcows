import React from 'react'

const ScoreButton = ({
  onClick, 
  turn, 
  player1TypedDigits,
  player2TypedDigits,
  isScoreButtonAvailable
}) => {
  if (isScoreButtonAvailable === false) {
    return <span>Score</span>
  }
  return (
    <a href="#"
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