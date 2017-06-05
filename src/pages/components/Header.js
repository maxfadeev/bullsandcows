import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'

import '../styles/header.css'

const Header = () => (
  <header className="header">
    <Navigation />
    <ul className="icons">
      <li>
        <Link to="https://github.com/maxfadeev" target="_blank">
          <img src="/img/github.svg" alt="github" />
        </Link></li>
      <li>
        <Link to="https://twitter.com/_maxfadeev" target="_blank">
          <img src="/img/twitter.svg" alt="twitter" />  
        </Link>
      </li>
    </ul>
  </header>
)

export default Header