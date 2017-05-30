import React from 'react'

const ScoresList = ({scores}) => (
  <ul id="scores-list" className="results-list">
    {scores.map((s, key) =>
      <li key={key}>
        <ul>
          <li>{s.player1}</li>
          <li>{s.player2}</li>
        </ul>
      </li>  
    )}
  </ul>
)

export default ScoresList