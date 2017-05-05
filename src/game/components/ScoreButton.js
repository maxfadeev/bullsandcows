import React from 'react'

const ScoreButton = ({onClick, isScoreButtonAvailable}) => {
  if (isScoreButtonAvailable === false) {
    return <span>Score</span>
  }
  return (
    <a href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      Score
    </a>
  )
}

export default ScoreButton