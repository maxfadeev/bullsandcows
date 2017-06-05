import React from 'react'

import PlayerResults from './PlayerResults'
import Message from './Message'

import { OPPONENT_MISTAKE, OPPONENT_WIN, OPPONENT_LOSE } from '../constants/Status'

import '../styles/resultsList.css'

const ResultsList = ({guesses, scores, status}) => {
  switch (status) {
    case OPPONENT_MISTAKE:
      return <Message type="error">You made a mistake somewhere in scoring. Please, reload the page to start a new game</Message>
    case OPPONENT_WIN:
      return (
        <div className="award">
          <img src="/img/trophy.png" alt="award" />
          <Message type="success">Congratulations, You win!</Message>
        </div> 
      ) 
    case OPPONENT_LOSE:  
      return (
        <div className="award">
          <img src="/img/game-over.png" alt="award" />
          <Message type="success">Onfortunately, You lose. But don't give up and try again!</Message>
        </div>
      )
    default:
      return (
        <div id="results-list">
          <PlayerResults guesses={guesses.player1} scores={scores.player2} />
          <PlayerResults guesses={guesses.player2} scores={scores.player1} />
        </div>
      )  
  }
}

export default ResultsList