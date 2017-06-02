import React from 'react'

import TypedDigit from './TypedDigit'
import '../styles/typedDigits.css'

const TypedDigitsList = ({typedDigits, isScoreTurn, onRemoveTypedDigit}) => (
  <ul id="typed-digits" className="disable-select">
    {typedDigits.map((digit, key) => 
      <li key={key}>
        <TypedDigit onClick={() => onRemoveTypedDigit(digit, key)}>
          {digit}
        </TypedDigit>
        <span className={isScoreTurn ? (key === 0 ? 'green-icon' : 'orange-icon') : 'no-icon'}></span>
      </li>
    )}
  </ul>
)

export default TypedDigitsList