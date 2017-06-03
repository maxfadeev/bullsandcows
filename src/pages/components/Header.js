import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'

const Header = () => (
  <header className="header">
    <Navigation />
    <ul className="icons">
      <li><Link to="https://github.com/maxfadeev" target="_blank"><img src="/img/github-logo.png" alt="github" /></Link></li>
      <li><Link to="https://twitter.com/_maxfadeev" target="_blank"><img src="/img/twitter-logo.png" alt="twitter" /></Link></li>
    </ul>
  </header>
)

export default Header