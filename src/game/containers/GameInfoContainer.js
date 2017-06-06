import { connect } from 'react-redux'

import GameInfo from '../components/GameInfo'

import { SCORE_TURN, GUESS_TURN } from '../constants/Game'

const mapStateToProps = (state) => {
  let result = ''
  if (state.game.turn === SCORE_TURN) {
    const player2Guesses = state.game.guesses.player2
    result = player2Guesses[player2Guesses.length - 1]  
  } 
  else if (state.game.turn === GUESS_TURN && state.game.guesses.player1.length !== 0) {
    const player2Scores = state.game.scores.player2
    result = player2Scores[player2Scores.length - 1] 
  }

  return {
    result,
    turn: state.game.turn
  }
}

export default connect(
  mapStateToProps
)(GameInfo)