import React from 'react'

import Message from './Message'

import { PLAYER1_MISTAKE, PLAYER1_WIN, PLAYER1_LOSE } from '../constants/GameStatuses'

const GameOver = ({status}) => {
  switch (status) {
    case PLAYER1_MISTAKE:
      return <Message type="error">You made a mistake somewhere in scoring. Please, reload the page to start a new game</Message>
    case PLAYER1_WIN:
      return (
        <div className="award">
          <img src="/img/trophy.png" alt="award" />
          <Message type="success">Congratulations, You win!</Message>
        </div> 
      ) 
    case PLAYER1_LOSE:  
      return (
        <div className="award">
          <img src="/img/game-over.png" alt="award" />
          <Message type="success">Onfortunately, You lose. But don't give up and try again!</Message>
        </div>
      )
    default:
      return ''  
  }
}

export default GameOver