import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => (
  <DocumentTitle title="Max Fadeev">
    <div className="home">
      <h2>Welcome!</h2>
      <p>My name is Max Fadeev. I am a Developer. Read a little bit more about
        me <Link to="/about">here</Link>.
        If you don't need the information about me, you can just play a 
        little <Link to="/game">game</Link>.</p>
      <p>Fill free to <Link to="/contact">contact</Link> me.</p>
      <p>Here is a desert, me and an orange =).</p>
      <img src="/img/desert.jpg" alt="desert" />
    </div>
  </DocumentTitle>
)

export default Home