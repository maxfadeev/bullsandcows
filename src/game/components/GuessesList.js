import React from 'react'

const GuessesList = ({guesses}) => (
  <ul id="guesses-list">
    {guesses.map((g, key) =>
      <li key={key}>
        <ul>
          <li className="guess">{g.player1}</li>
          <li className="guess">{g.player2}</li>
        </ul>
      </li>
    )}
  </ul>
)

export default GuessesList