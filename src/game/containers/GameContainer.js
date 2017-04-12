import React from 'react'
import NumericButtonsListContainer from './NumericButtonsListContainer'
import GuessContainer from './GuessContainer'
import ScoreButtonContainer from './ScoreButtonContainer'
import ScoresListContainer from './ScoresListContainer'

const GameContainer = () => (
  <div>
    <NumericButtonsListContainer />
    <GuessContainer />
    <ScoreButtonContainer />
    <ScoresListContainer />
  </div>
)

export default GameContainer