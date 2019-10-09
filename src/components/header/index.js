import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import style from './style.module.scss';

const Logo = ({ siteTitle, isHomePage }) => {
  return isHomePage ? (
    <h1 className={style.logo}>{siteTitle}</h1>
  ) : (
    <div className={style.logo}>
      <Link to="/">{siteTitle}</Link>
    </div>
  );
};

const navMenu = [
  // { title: '🎃 Halloween', path: '/halloween' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'Services', path: '/services' },
  { title: 'Reviews', path: '/reviews' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' }
];

const Header = ({ siteTitle, location }) => {
  const { pathname } = location;
  const isHomePage = pathname === '/';
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={`container ${style.header}`}>
      <button
        onClick={() => setOpen((currValue) => !currValue)}
        type="button"
        className={style.burgerButton}
      >
        <span className={style.burger}>Menu</span>
      </button>
      <Logo isHomePage={isHomePage} siteTitle={siteTitle} />
      <nav
        role="navigation"
        className={classNames(style.nav, { [style.showMenu]: isOpen })}
      >
        <ul className={style.navList}>
          {navMenu.map((navItem) => (
            <li key={navItem.title}>
              <Link
                className={pathname === navItem.path ? style.active : ''}
                to={navItem.path}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
          <li className={style.special}>
            <a href="tel:07597081126">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128S256 64 192 64 0 256 0 256c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192S768 576 704 640z"
                />
              </svg>
              07597081126
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object
};

Header.defaultProps = {
  siteTitle: ``
};

export default memo(Header);
