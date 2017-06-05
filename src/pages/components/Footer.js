import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => (
  <footer className="footer">
    <span class="footer-copyright">© {new Date().getFullYear()} - Max Fadeev</span>  
    <ul className="icons">
      <li>
        <Link to="https://github.com/maxfadeev" target="_blank">
          <img src="/img/github-black.svg" alt="github" />
        </Link></li>
      <li>
        <Link to="https://twitter.com/_maxfadeev" target="_blank">
          <img src="/img/twitter-black.svg" alt="twitter" />
        </Link>
      </li>
    </ul>
  </footer>
)

export default Footer