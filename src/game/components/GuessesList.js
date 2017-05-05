import React from 'react'

const GuessesList = ({guesses}) => (
  <ul>
    {guesses.map((g, key) =>
      <li key={key}>{g.player1} | {g.player2}</li>
    )}
  </ul>
)

export default GuessesList