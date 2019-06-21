import React, { memo } from "react"
import { Link } from "gatsby"

import awardIcon from "./award.svg"
import facebookIcon from "./facebook.svg"
import instagramIcon from "./instagram.svg"
import style from "./style.module.scss"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={[style.links, style.social].join(" ")}>
        <li>
          <a
            title="Visit Facebook page"
            target="_blank"
            href="https://www.facebook.com/HennaByRuby"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              alt="Visit Facebook page"
              className={style.icon}
            />
          </a>
        </li>
        <li>
          <a
            title="Visit Instagram page"
            target="_blank"
            href="https://www.instagram.com/HennaByRubyLondon"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="Visit Instagram page"
              className={style.icon}
            />
          </a>
        </li>
        <li>
          <a
            title="Public Liability Insurance"
            href="/about#public-liability-insurance"
          >
            <img
              src={awardIcon}
              alt="Public Liability Insurance"
              className={style.icon}
            />
          </a>
        </li>
      </ul>
      <ul className={style.links}>
        <li>
          <Link to="/privacy-policy">Privacy</Link>
        </li>
        <li>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
        </li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Ruby. All rights reserved.</p>
    </footer>
  )
}

export default memo(Footer)
