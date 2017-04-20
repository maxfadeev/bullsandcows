import React from 'react'

import NumericButton from './NumericButton'
import '../styles/numericButtons.css'

const NumericButtonsList = ({
  numericButtons, 
  isScoreAvailable, 
  onNumericButtonClick
}) => (
  <ul id="numeric-buttons">
    {numericButtons.map((button) => 
      <li key={button.numeral}>
        <NumericButton 
          onClick={() => onNumericButtonClick(button.numeral, isScoreAvailable)}
        >
          {button.numeral}
        </NumericButton>
      </li>
    )}
  </ul>
)

export default NumericButtonsList