import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Game from './components/Game'
import './styles/header.css'
import './styles/content.css'

const Pages = () => (
  <Router>
    <div>
      <Navigation />

      <main className="content">
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </main>
    </div>
  </Router>
)

export default Pages
