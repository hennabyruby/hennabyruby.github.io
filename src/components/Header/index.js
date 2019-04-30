import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./style.module.scss"

const Header = ({ siteTitle, isHomePage }) => (
  <header className={style.header}>
    <h1 className={style.heading}>
      {isHomePage ? siteTitle : <Link to="/">{siteTitle}</Link>}
    </h1>
    <nav role="navigation" className={style.nav}>
      <ul className={style.navList}>
        <li>
          <Link className={style.active} to="/gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
