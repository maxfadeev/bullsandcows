import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Game from './components/Game'
import Footer from './components/Footer'
import Page404 from './components/Page404'
import './styles/content.css'

const Pages = () => (
  <Router>
    <div>
      <Header />
      <main className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Page404} />
        </Switch>
        <Route exact path="/(about|contact)?" component={Footer} />
      </main>
    </div>
  </Router>
)

export default Pages
