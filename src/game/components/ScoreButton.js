import React from 'react'

const ScoreButton = ({onClick, typedDigits, isScoreButtonAvailable}) => {
  if (isScoreButtonAvailable === false) {
    return <span>Score</span>
  }
  return (
    <a href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick(typedDigits)
      }}
    >
      Score
    </a>
  )
}

export default ScoreButton