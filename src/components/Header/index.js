import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./style.module.scss"

const Header = props => {
  const { siteTitle, isHomePage, ...rest } = props
  const { location } = rest

  return (
    <header className={style.header}>
      <h1 className={style.heading}>
        {isHomePage ? siteTitle : <Link to="/">{siteTitle}</Link>}
      </h1>
      <nav role="navigation" className={style.nav}>
        <ul className={style.navList}>
          <li>
            <Link
              className={`${
                location.pathname === "/gallery" ? style.active : ""
              }`}
              to="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={`${location.pathname === "/blog" ? style.active : ""}`}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/about" ? style.active : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/contact" ? style.active : ""
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  isHomePage: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  isHomePage: false,
}

export default Header
