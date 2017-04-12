import React from 'react'

const ScoresList = ({scores}) => (
  <ul>
    {scores.map((score, key) =>
      <li key={key}>{score}</li>  
    )}
  </ul>
)

export default ScoresList