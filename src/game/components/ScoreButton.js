import React from 'react'

const ScoreButton = ({
  onClick, 
  typedDigits, 
  turn, 
  isScoreButtonAvailable
}) => {
  if (isScoreButtonAvailable === false) {
    return <span>Score</span>
  }
  return (
    <a href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick(typedDigits, turn)
      }}
    >
      Score
    </a>
  )
}

export default ScoreButton