import React from 'react'

const ScoresList = ({scores}) => (
  <ul>
    {scores.map((s, key) =>
      <li key={key}>{s.player1} | {s.player2}</li>  
    )}
  </ul>
)

export default ScoresList