/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import './header.scss';

const Header = () => {
  const screenSize = window.innerWidth;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header">
      <a className="logo" href="/">
        <img src="./logo.svg" alt="Enver" />
      </a>
      {
        screenSize > 768 ? (
          <>
            <NavigationMenu />
            <button className="header__btn">
              Contact us
            </button>
          </>
        ) : <button onClick={() => setShowMenu(true)} className="menu-opener" />
      }
      {
        showMenu === true ? <MobileMenu handleClick={() => setShowMenu(false)} /> : null
      }
    </div>
  );
};

export default Header;
