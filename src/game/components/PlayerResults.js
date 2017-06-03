import React from 'react'

const PlayerResults = ({ guesses, scores }) => (
  <div className="player-results">
    <ul className="guesses-list">
      {guesses.map((g, key) =>
        <li key={key} className="guess">{g}</li>
      )}
    </ul>
    <ul className="scores-list">
      {scores.map((s, key) =>
        <li key={key} className="score">{s}</li>
      )}
    </ul>
  </div>
)

export default PlayerResults