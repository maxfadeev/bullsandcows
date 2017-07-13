import React from 'react'

import Message from './Message'

const GuessInfo = ({guess}) => (
  <Message type="success">Your opponent's guess is <p><b>{guess}</b></p></Message>
)

export default GuessInfo