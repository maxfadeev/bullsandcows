import React from 'react'
import NumericButtonsListContainer from './NumericButtonsListContainer'

import ScoreButtonContainer from './ScoreButtonContainer'
import ResultsListContainer from './ResultsListContainer'
import TypedDigitsListContainer from './TypedDigitsListContainer'
import Message from '../components/Message'
import '../styles/gameContainer.css'

const GameContainer = () => (
  <div id="game-container">
    <NumericButtonsListContainer numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    <hr className="horizontal-line"/>
    <TypedDigitsListContainer />
    <Message type="success">Click on the numeric buttons above to make your guess</Message>
    <ScoreButtonContainer />
    <ResultsListContainer />
  </div>
)

export default GameContainer