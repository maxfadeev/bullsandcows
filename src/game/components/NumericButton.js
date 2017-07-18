import React from 'react'

const NumericButton = ({onClick, children}) => {
  return (
    <a href=""
      onClick={(e) => {
        e.preventDefault()
        onClick() 
      }}
    >
      {children}      
    </a>
  )
}

export default NumericButton
