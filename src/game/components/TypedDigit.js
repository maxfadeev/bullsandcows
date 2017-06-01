import React from 'react'

const TypedDigit = ({onClick, children}) => (
  <a href="#"
     onClick={(e) => {
       e.preventDefault()
       onClick() 
     }}
  >
    {children}      
  </a>
)

export default TypedDigit
