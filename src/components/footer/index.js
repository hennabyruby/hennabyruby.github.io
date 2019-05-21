import React, { memo } from "react"

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
      </ul>
      <ul className={style.links}>
        <li>Public Liability Insurance</li>
        <li>Privacy</li>
        <li>Terms &amp; Conditions</li>
      </ul>
    </footer>
  )
}

export default memo(Footer)
