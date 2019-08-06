import React, { memo } from 'react';
import PropTypes from 'prop-types';
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
  { title: 'Gallery', path: '/gallery' },
  { title: 'Blog', path: '/blog' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Header = ({ siteTitle, location }) => {
  const { pathname } = location;
  const isHomePage = pathname === '/';

  return (
    <header className={`container ${style.header}`}>
      <Logo isHomePage={isHomePage} siteTitle={siteTitle} />
      <nav role="navigation" className={style.nav}>
        <ul className={style.navList}>
          {navMenu.map(navItem => (
            <li key={navItem.title}>
              <Link
                className={pathname === navItem.path ? style.active : ''}
                to={navItem.path}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default memo(Header);
