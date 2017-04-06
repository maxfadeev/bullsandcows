import React from 'react'

import GuessDigit from './GuessDigit'

const Guess = ({guessDigits, onGuessDigitClick}) => (
  <ul>
    {guessDigits.map((digit) => 
      <li key={digit}>
        <GuessDigit onClick={() => onGuessDigitClick(digit)}>
          {digit}
        </GuessDigit>
      </li>
    )}
  </ul>
)

export default Guess