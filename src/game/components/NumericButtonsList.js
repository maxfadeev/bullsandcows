import React from 'react'

import NumericButton from './NumericButton'
import '../styles/numericButtons.css'

const NumericButtonsList = ({
  numerals,
  typedDigits,
  turn, 
  onNumericButtonPress
}) => (
  <ul id="numeric-buttons">
    {numerals.map((n) => 
      <li key={n}>
        <NumericButton 
          onClick={() => onNumericButtonPress(n, typedDigits, turn)}
        >
          {n}
        </NumericButton>
      </li>
    )}
  </ul>
)

export default NumericButtonsList