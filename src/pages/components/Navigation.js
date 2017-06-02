import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <nav className="nav">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/game">Game</Link></li>
    </ul>
  </nav>
)

export default Navigation