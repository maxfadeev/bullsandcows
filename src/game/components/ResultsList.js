import React from 'react'

import GuessesList from './GuessesList'
import ScoresList from './ScoresList'
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
          <span className="success-message">Congratulations, You win!</span>
        </div> 
      ) 
    case OPPONENT_LOSE:  
      return (
        <div className="award">
          <img src="/img/game-over.png" alt="award" />
          <span className="success-message">Onfortunately, You lose. But don't give up and try again!</span>
        </div>
      )
  }

  return (
    <div id="results-list">
      <GuessesList guesses={guesses} />
      <ScoresList scores={scores} />
    </div>
  )
}

export default ResultsList