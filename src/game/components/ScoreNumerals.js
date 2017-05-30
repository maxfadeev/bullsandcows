import React from 'react'

import '../styles/scoreNumerals.css'

const Score = ({numerals}) => (
  <ul className="score-numerals">
    {numerals.map((numeral, key) =>
      <li key={key} >
        {numeral}
        <span className={key === 0 ? 'green-icon' : 'orange-icon'}></span>
      </li>
    )}
  </ul>
)

export default Score