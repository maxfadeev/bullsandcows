import React from 'react'
import NumericButtonsListContainer from './NumericButtonsListContainer'

import ScoreButtonContainer from './ScoreButtonContainer'
import ScoresListContainer from './ScoresListContainer'
import TypedDigitsListContainer from './TypedDigitsListContainer'

const GameContainer = () => (
  <div>
    <NumericButtonsListContainer numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    <TypedDigitsListContainer />
    <ScoreButtonContainer />
    <ScoresListContainer />
  </div>
)

export default GameContainer