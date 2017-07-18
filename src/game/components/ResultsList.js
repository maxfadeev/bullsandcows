import React from 'react'

import PlayerResults from './PlayerResults'

import '../styles/resultsList.css'

const ResultsList = ({guesses, scores, isOnlyPlayer1 = true}) => (
  <div id="results-list">
    <PlayerResults guesses={guesses.player1} scores={scores.player2} />
    {isOnlyPlayer1 ? '' : (
      <PlayerResults guesses={guesses.player2} scores={scores.player1} />
    )}
  </div>
)

export default ResultsList