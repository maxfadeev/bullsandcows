import React from 'react'
import NumericButtonsListContainer from './NumericButtonsListContainer'
import GuessContainer from './GuessContainer'
import ScoreButtonContainer from './ScoreButtonContainer'

const GameContainer = () => (
  <div>
    <NumericButtonsListContainer />
    <GuessContainer />
    <ScoreButtonContainer />
  </div>
)

export default GameContainer