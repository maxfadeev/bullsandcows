import React from 'react'

const ResultsList = ({guesses, scores}) => (
  <div>
    <ul>
      {guesses.map((g, key) =>
        <li key={key}>{g.player1} | {g.player2}</li>  
      )}
    </ul>
    <ul>
      {scores.map((s, key) =>
        <li key={key}>{s.player1} | {s.player2}</li>  
      )}
    </ul>
  </div>
)

export default ResultsList