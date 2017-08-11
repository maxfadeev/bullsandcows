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

const mapStateToProps = ({
  game: {
    typedDigits: player1TypedDigits,
    turn,
    ai: { typedDigits: player2TypedDigits }
  }
}) => {
  return {
    turn,
    // typed digits may be guess or score digits
    player1TypedDigits,
    player2TypedDigits,
    isScoreButtonAvailable:
      ((turn === GUESS_TURN && player1TypedDigits.length === GUESS_LENGTH) ||
        (turn === SCORE_TURN && player1TypedDigits.length === SCORE_LENGTH)) &&
      !player1TypedDigits.includes(SUB)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (turn, player1TypedDigits, player2TypedDigits) => {
      if (turn === GUESS_TURN)
        dispatch(addGuess(player1TypedDigits, player2TypedDigits))
      if (turn === SCORE_TURN)
        dispatch(addScore(player1TypedDigits, player2TypedDigits))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreButton)
