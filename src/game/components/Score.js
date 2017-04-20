import React from 'react'

import ScoreDigit from './ScoreDigit'
import '../styles/scoreDigits.css'

const Score = ({scoreDigits, onScoreDigitClick}) => (
  <ul id="score-digits">
    {scoreDigits.map((digit, key) => 
      <li key={key}>
        <ScoreDigit onClick={() => onScoreDigitClick(key)}>
          {digit}
        </ScoreDigit>
      </li>
    )}
  </ul>
)

export default Score