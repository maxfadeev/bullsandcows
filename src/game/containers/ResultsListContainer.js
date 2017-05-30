import React from 'react'

import ScoresListContainer from './ScoresListContainer'
import GuessesListContainer from './GuessesListContainer'
import '../styles/resultsList.css'

const ResultsListContainer = () => (
  <div id="results-container">
    <GuessesListContainer />
    <ScoresListContainer />
  </div>
)

export default ResultsListContainer