import React from 'react'

import NumericButton from './NumericButton'

const NumericButtonsList = ({numericButtons, onNumericButtonClick}) => (
  <ul>
    {numericButtons.map((button) => 
      <li key={button.numeral}>
        <NumericButton 
          onClick={() => onNumericButtonClick(button.numeral)}
          choosen={button.choosen}
        >
          {button.numeral}
        </NumericButton>
      </li>
    )}
  </ul>
)

export default NumericButtonsList