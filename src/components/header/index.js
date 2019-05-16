import React, { memo } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import style from "./style.module.scss"

const Logo = ({ siteTitle, isHomePage }) => {
  return isHomePage ? (
    <h1 className={style.heading}>{siteTitle}</h1>
  ) : (
    <div className={style.heading}>
      <Link to="/">{siteTitle}</Link>
    </div>
  )
}

const navManu = [
  { title: "Gallery", path: "/gallery" },
  { title: "Blog", path: "/blog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
]

const Header = ({ siteTitle, location }) => {
  const { pathname } = location
  const isHomePage = pathname === "/"

  return (
    <header className={style.header}>
      <Logo isHomePage={isHomePage} siteTitle={siteTitle} />
      <nav role="navigation" className={style.nav}>
        <ul className={style.navList}>
          {navManu.map(navItem => (
            <li>
              <Link
                className={pathname === navItem.path ? style.active : ""}
                to={navItem.path}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default memo(Header)
