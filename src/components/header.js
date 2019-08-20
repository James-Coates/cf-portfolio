import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import headerStyle from './header.module.scss';

import Menu from './menu';

const Header = ({ siteTitle }) => (
  <header className={`${headerStyle.header} container`}>
      <nav className={headerStyle.nav}>
        <div className={headerStyle.nav__logo}>
          <Link to="/">James Coates</Link>
        </div>
        <div className={headerStyle.nav__links}>
          <Link to="/work" className={headerStyle.nav__link}>Work</Link>
          <Link to="/about" className={headerStyle.nav__link}>About</Link>
          <Link to="/contact" className={headerStyle.nav__link}>Contact</Link>
        </div>
        <Menu />
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
