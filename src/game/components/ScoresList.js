import React from 'react'

const ScoresList = ({scores}) => (
  <ul>
    {scores.map((digits, key) =>
      <li key={key}>{digits}</li>  
    )}
  </ul>
)

export default ScoresList