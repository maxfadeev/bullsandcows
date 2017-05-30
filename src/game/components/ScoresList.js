import React from 'react'

import ScoreNumerals from './ScoreNumerals'

const ScoresList = ({scores}) => (
  <ul id="scores-list" className="results-list">
    {scores.map((s, key) =>
      <li key={key}>
        <ul>
          <li className="score"><ScoreNumerals numerals={s.player1} /></li>
          <li className="score"><ScoreNumerals numerals={s.player2} /></li>
        </ul>
      </li>  
    )}
  </ul>
)

export default ScoresList