import React from "react";

import "./navbar.scss";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="nav__items">
        <li className="nav__item">
          <a href="/">Fronend</a>
          <ul>
            <li>
              <a href="/">HTML</a>
            </li>
            <li>
              <a href="/">CSS</a>
            </li>
            <li>
              <a href="/">JS</a>
            </li>
            <li>
              <a href="/">TS</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <a href="/">Backend</a>
          <ul>
            <li>
              <a href="/">Nodejs</a>
            </li>
            <li>
              <a href="/">Python</a>
            </li>
            <li>
              <a href="/">Golang</a>
            </li>
            <li>
              <a href="/">Java</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <a href="/">help</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// const NavItem = (props) => {
//     return <li className="navbar__item">{props.title}</li>;
//   };

//   const NavSub = () => {
//     return <ul className="navbar__sub-menu"></ul>;
//   };
