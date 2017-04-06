import React from 'react'

const GuessDigit = ({onClick, children}) => (
  <a href="#"
     onClick={(e) => {
       e.preventDefault()
       onClick() 
     }}
  >
    {children}      
  </a>
)

export default GuessDigit
