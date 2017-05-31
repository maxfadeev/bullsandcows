import React from 'react'
import '../styles/messages.css'

const Message = ({type, children}) => (
  <span className={type + '-message'}>{children}</span>
)

export default Message