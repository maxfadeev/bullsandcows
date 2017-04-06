import React from 'react'

const NumericButton = ({choosen, onClick, children}) => {
  if (choosen) {
    return <span>{children}</span>
  }
  return (
    <a href="#"
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
