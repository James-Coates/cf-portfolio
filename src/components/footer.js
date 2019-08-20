// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
import footerStyles from './footer.module.scss';

//assets
import github from '../images/footer/github.svg';
import twitter from '../images/footer/twitter.svg';

const Footer = () => (
  <footer className={`${footerStyles.footer} container`}>
      <div className={footerStyles.tm}>© 2019 James Coates</div>
      <div className={footerStyles.social}>
        <a href="https://github.com/James-Coates" target="blank"><img src={github} alt=""/></a>
        <a href="https://twitter.com/_JamesCoates" target="blank"><img src={twitter} alt=""/></a>
    </div>
  </footer>
)

export default Footer;
