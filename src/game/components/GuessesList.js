import React from 'react'

const GuessesList = ({guesses}) => (
  <ul id="guesses-list" className="results-list">
    {guesses.map((g, key) =>
      <li key={key}>
        <ul>
          <li>{g.player1}</li>
          <li>{g.player2}</li>
        </ul>
      </li>
    )}
  </ul>
)

export default GuessesList