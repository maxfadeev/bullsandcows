import React from 'react'

import TypedDigit from './TypedDigit'
import '../styles/typedDigits.css'

const TypedDigitsList = ({typedDigits, onRemoveTypedDigit}) => (
  <ul id="typed-digits">
    {typedDigits.map((digit) => 
      <li key={digit}>
        <TypedDigit onClick={() => onRemoveTypedDigit(digit)}>
          {digit}
        </TypedDigit>
      </li>
    )}
  </ul>
)

export default TypedDigitsList