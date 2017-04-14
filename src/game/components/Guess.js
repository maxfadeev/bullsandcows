import React from 'react'

import GuessDigit from './GuessDigit'
import '../styles/guessDigits.css'

const Guess = ({guessDigits, onGuessDigitClick}) => (
  <ul id="guess-digits">
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