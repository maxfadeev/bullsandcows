import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Game from '../../game'
import '../styles/header.css'

const Header = () => (
  <Router>
    <main>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/game">Game</Link></li>
        </ul>
      </nav>
      
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/about" component={About} />
    </main>
  </Router>
)

export default Header
