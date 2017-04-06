import React from 'react'
import NumericButtonsListContainer from './NumericButtonsListContainer'
import GuessContainer from './GuessContainer'

const GameContainer = () => (
  <div>
    <NumericButtonsListContainer numerals={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} />
    <GuessContainer />
  </div>
)

export default GameContainer