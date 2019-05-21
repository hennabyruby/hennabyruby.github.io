import React, { memo } from "react"
import { Link } from "gatsby"

import style from "./style.module.scss"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>&copy; {new Date().getFullYear()} Ruby. All rights reserved.</p>
      <ul className={style.links}>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/HennaByRuby"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/HennaByRubyLondon"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy</Link>
        </li>
        <li>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
        </li>
      </ul>
      <p>The work is covered by Public Liability Insurance.</p>
    </footer>
  )
}

export default memo(Footer)
