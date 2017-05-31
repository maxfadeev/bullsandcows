import React from 'react'

import GuessesList from './GuessesList'
import ScoresList from './ScoresList'
import Message from './Message'

import '../styles/resultsList.css'

const ResultsList = ({guesses, scores, isSuccess}) => {
  if (isSuccess === false) {
    return <Message type="error">You made a mistake somewhere in a scoring. Please, reload the page to start a new game</Message>
  }

  return (
    <div id="results-list">
      <GuessesList guesses={guesses} />
      <ScoresList scores={scores} />
    </div>
  )
}

export default ResultsList