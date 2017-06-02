import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'
import '../styles/contact.css'

const Contact = () => (
  <DocumentTitle title="Contact">
    <div className="contact">
      <h2>Contact</h2>
      <p>If you have questions, an interesting topic for conversation, tempting offer or something else, fill free to contact me.
        Despite the fact that I'm an angry introvert =), I'am open for your propositions.
      </p>
      <p>Find me on Twitter: <Link to="https://twitter.com/_maxfadeev" target="_blank">@_maxfadeev</Link></p>
      <p>Find me on Github: <Link to="https://github.com/maxfadeev" target="_blank">maxfadeev</Link></p>
      <p>Mail me: <Link to="mailto:mail@maxfadeev.com">mail@maxfadeev.com</Link></p>
    </div>
  </DocumentTitle>  
)

export default Contact