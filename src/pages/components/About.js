import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'
import '../styles/about.css'

const About = () => (
  <DocumentTitle title="About">
    <div className="about">
      <div className="image"><img alt="max" src="/img/max.jpg" /></div>
      <h2>About</h2>
      <p>Hi, I am Max Fadeev. I'm a Developer mostly specializing in Web technologies. Recent years, I devote more
        attention to JavaScript, React and Redux.
      I really love my job and get inspired by the community more and more.</p>
      <p>Also I like table tennis, it is amazing game
      that requires an ability to think and make decisions faster than you can say Jack Robinson.</p>
      <p>By the way, in case you are a bit tired and want to get some rest, you can play
        a little <Link to="/game">game</Link> of my childhood 
        called <Link to="https://en.wikipedia.org/wiki/Bulls_and_Cows" target="_blank" rel="noopener">"Bulls and Cows"</Link>
        (We used to call it "Numbers").
      </p>
      <p>In any case, fill free to <Link to="/contact">contact</Link> me.</p>
    </div>
  </DocumentTitle>
)

export default About