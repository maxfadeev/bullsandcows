import { connect } from 'react-redux'

import ScoreButton from '../components/ScoreButton'
import { addGuess, addScore } from '../actions/scores'
import { 
  GUESS_TURN, 
  SCORE_TURN, 
  GUESS_LENGTH, 
  SCORE_LENGTH,
  SUB
} from '../constants/Game'

const mapStateToProps = (state) => {
  return {
    turn: state.game.turn,
    // typed digits may be guess or score digits
    player1TypedDigits: state.game.typedDigits,
    player2TypedDigits: state.game.ai.typedDigits,
    isScoreButtonAvailable: (   
      (
        (
          state.game.turn === GUESS_TURN
          && state.game.typedDigits.length === GUESS_LENGTH
        )
        || (
          state.game.turn === SCORE_TURN
          && state.game.typedDigits.length === SCORE_LENGTH
        )
      )
      && !state.game.typedDigits.includes(SUB)
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (turn, player1TypedDigits, player2TypedDigits) => {
      if (turn === GUESS_TURN) dispatch(addGuess(player1TypedDigits, player2TypedDigits))
      if (turn === SCORE_TURN) dispatch(addScore(player1TypedDigits, player2TypedDigits))  
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreButton)