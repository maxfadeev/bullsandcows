import React from 'react'

import Message from './Message'

const ScoreInfo = ({score}) => (
  <Message type="success">
    Your score is  
    <span className="game-info-result">
      <b>{score[0]}</b><span className="green-icon"></span>
    </span>
    <span  className="game-info-result">
      <b>{score[1]}</b><span className="orange-icon"></span>
    </span>
  </Message>
)

export default ScoreInfo