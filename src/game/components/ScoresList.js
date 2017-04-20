import React from 'react'

const ScoresList = ({scores}) => (
  <ul>
    {scores.map((score, key) =>
      <li key={key}>{score.guessDigits} <b>{score.scoreDigits}</b></li>  
    )}
  </ul>
)

export default ScoresList