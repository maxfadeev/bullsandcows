import React from 'react'

const ScoreButton = ({onClick, turn, isScoreButtonAvailable}) => {
  if (isScoreButtonAvailable === false) {
    return <span>Score</span>
  }
  return (
    <a href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick(turn)
      }}
    >
      Score
    </a>
  )
}

export default ScoreButton