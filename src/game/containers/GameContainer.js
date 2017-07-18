import React from 'react'
import { connect } from 'react-redux'

import { GAME_CONTINUES } from '../constants/GameStatuses'

import NumericButtonsListContainer from './NumericButtonsListContainer'

import ScoreButtonContainer from './ScoreButtonContainer'
import ResultsListContainer from './ResultsListContainer'
import TypedDigitsListContainer from './TypedDigitsListContainer'
import GameInfoContainer from './GameInfoContainer'
import GameRulesContainer from './GameRulesContainer'
import GameOverContainer from './GameOverContainer'
import '../styles/gameContainer.css'

const GameContainer = ({status}) => {
  let content = (
    <div>
      <NumericButtonsListContainer numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      <TypedDigitsListContainer />
      <GameInfoContainer />
      <ScoreButtonContainer />
      <ResultsListContainer />
    </div>
  )
  if (status !== GAME_CONTINUES) {
    content = (
      <div>
        <ResultsListContainer isOnlyPlayer1={false} />
        <GameOverContainer />
      </div>
    )
  }
  
  return (
    <div id="game-container">
      {content}
      <GameRulesContainer />
    </div>
  )  
}

const mapStateToProps = (state) => {
  return {
    status: state.game.status
  }
}

export default connect(
  mapStateToProps
)(GameContainer)