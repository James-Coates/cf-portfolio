import { Link } from "gatsby";
import React from "react";
import menuStyle from './menu.module.scss';

const Menu = () => (
  <div className={menuStyle.wrapper}>
    <input type="checkbox" className={menuStyle.toggler} />
    <div className={menuStyle.hamburger}><div></div></div>
    <div className={menuStyle.menu}>
      <div>
        <div>
          <ul>
            <li className={menuStyle.item}>
              <Link to="/work" className={menuStyle.link}>Work</Link>
            </li>
            <li className={menuStyle.item}>
              <Link to="/about" className={menuStyle.link}>About</Link>
            </li>
            <li className={menuStyle.item}>
              <Link to="/contact" className={menuStyle.link}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Menu;
