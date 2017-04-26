import React from 'react'

const ScoresList = ({scores}) => (
  <ul>
    {scores.map((score, key) =>
      <li key={key}>{score.digits}</li>  
    )}
  </ul>
)

export default ScoresList