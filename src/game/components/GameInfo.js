import React from 'react'

import Message from './Message'
import ScoreInfo from './ScoreInfo'
import GuessInfo from './GuessInfo'

import { GUESS_TURN, SCORE_TURN } from '../constants/Game'

import '../styles/gameInfo.css'

const GameInfo = ({result, turn}) => {
  let info = (
    <Message type="success">
      Click on the numeric buttons above to make your guess
    </Message>
  )
  if (result && turn === SCORE_TURN) {
    info = <GuessInfo guess={result}></GuessInfo>
  }
  else if (result && turn === GUESS_TURN) {
    info = <ScoreInfo score={result}></ScoreInfo>
  }

  return info
}

export default GameInfo