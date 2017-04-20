import React from 'react'

const ScoreDigit = ({onClick, children}) => (
  <a href="#"
     onClick={(e) => {
       e.preventDefault()
       onClick() 
     }}
  >
    {children}      
  </a>
)

export default ScoreDigit
