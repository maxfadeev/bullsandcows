import React from 'react'

import Message from './Message'

const GuessInfo = ({guess}) => (
  <Message type="success">Your opponent's guess is <b>{guess}</b></Message>
)

export default GuessInfo