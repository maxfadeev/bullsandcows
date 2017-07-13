import { connect } from 'react-redux'

import GameInfo from '../components/GameInfo'

import { SCORE_TURN, GUESS_TURN } from '../constants/Game'

const mapStateToProps = (state) => {
  const turn = state.game.turn
  const guesses = state.game.guesses
  const scores = state.game.scores
  let result = ''
  if (turn === SCORE_TURN) {
    result = guesses.player2[guesses.player2.length - 1]  
  } 
  else if (turn === GUESS_TURN && guesses.player1.length !== 0) {
    result = scores.player2[scores.player2.length - 1] 
  }

  return {
    result,
    turn
  }
}

export default connect(
  mapStateToProps
)(GameInfo)