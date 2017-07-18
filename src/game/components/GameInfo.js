import React from 'react'

import Message from './Message'
import ScoreInfo from './ScoreInfo'
import GuessInfo from './GuessInfo'

import { GUESS_TURN, SCORE_TURN } from '../constants/Game'

import '../styles/gameInfo.css'

const GameInfo = ({result, turn}) => {
  if (result && turn === SCORE_TURN) {
    return <GuessInfo guess={result}></GuessInfo>
  }
  else if (result && turn === GUESS_TURN) {
    return <ScoreInfo score={result}></ScoreInfo>
  }

  return (
    <Message type="success">
      Click on the numeric buttons above to make your guess
    </Message>
  )
}

export default GameInfo