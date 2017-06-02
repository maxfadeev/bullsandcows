import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => (
  <DocumentTitle title="Max Fadeev">
    <div className="home">
      <p>Welcome!</p>
      <p>My name is Max Fadeev. I am a Developer. Read a little bit more about
        me <Link to="/about">here</Link>.</p>
      <p>Fill free to <Link to="/contact">contact</Link> me.</p>
    </div>
  </DocumentTitle>
)

export default Home