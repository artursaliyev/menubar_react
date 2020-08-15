import React, { useState, useEffect } from "react";
import classnames from "classnames";

import "./navbar.scss";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let [node, setNode] = useState(null);

  const add = (event) => {
    const el$ = event.target.closest(".menu__item");

    if (el$ && el$ !== node) {
      console.log("$el", el$.dataset.type);
      console.log("old node", node);

      node && node.classList.remove("menu___expanded");

      el$.classList.add("menu___expanded");

      setNode(el$);
      console.log("update node", node);
    }
  };

  const onSetClass = (event) => {
    add(event);
    setIsOpen(true);
  };

  const mouseLeave = (event) => {
    const el$ = event.target.closest(".menu__item");
    if (isOpen && el$ !== node && event.target.dataset.type === "parent") {
      console.log("over");
      add(event);
    }
  };

  const closeMenu = () => {
    node && node.classList.remove("menu___expanded");
    setNode(null);
    setIsOpen(false);
  };

  // useEffect(() => {
  //   document.addEventListener("click", closeMenu);
  //   return () => {
  //     document.removeEventListener("click", closeMenu);
  //   };
  // }, []);

  console.log("RENDER");
  return (
    <div className="menu__root" onClick={onSetClass} onMouseOver={mouseLeave}>
      <div className="menu__item">
        <div className="menu__label" data-type="parent">
          File
        </div>
        <nav className="menu__dropdown">
          <div className="menu__group">
            <button className="menuButton__menuButton">
              <span className="menuButton__text">New</span>
            </button>
            <button className="menuButton__menuButton">
              <span className="menuButton__text">Save</span>
              <kbd className="menuButton__kbd">Ctrl+S</kbd>
            </button>
            <button className="menuButton__menuButton">
              <span className="menuButton__text">Make a copy</span>
            </button>
          </div>
          <div className="menu__group">
            <button className="menuButton__menuButton">
              <span className="menuButton__text">Export as PNG</span>
            </button>
          </div>
        </nav>
      </div>
      <div className="menu__item">
        <div className="menu__label" data-type="parent">
          View
        </div>
        <nav className="menu__dropdown">
          <div className="menu__group">
            <button className="menuButton__menuButton menuButton___disabled">
              <span className="menuButton__icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="Symbol__icon"
                >
                  {/* <use xlink:href="#icon-zoom-in"></use> */}
                </svg>
              </span>
              <span className="menuButton__text">Undo</span>
              <kbd className="menuButton__kbd">Ctrl+Z</kbd>
            </button>
            <button className="menuButton__menuButton menuButton___disabled">
              <span className="menuButton__text">Redo</span>
              <kbd className="menuButton__kbd">Ctrl+Shift+Z</kbd>
            </button>
          </div>
          <div className="menu__group">
            <button className="menuButton__menuButton menuButton___disabled">
              <span className="menuButton__text">Cut</span>
              <kbd className="menuButton__kbd">Ctrl+X</kbd>
            </button>
            <button className="menuButton__menuButton">
              <span className="menuButton__text">Copy</span>
              <kbd className="menuButton__kbd">Ctrl+C</kbd>
            </button>
            <button className="menuButton__menuButton menuButton___disabled">
              <span className="menuButton__text">Paste</span>
              <kbd className="menuButton__kbd">Ctrl+V</kbd>
            </button>
          </div>
          <div className="menu__group">
            <button className="menuButton__menuButton">
              <span className="menuButton__text">Select all</span>
              <kbd className="menuButton__kbd">Ctrl+A</kbd>
            </button>
            <button className="menuButton__menuButton">
              <span className="menuButton__text">Select brothers</span>
              <kbd className="menuButton__kbd">Ctrl+Shift+A</kbd>
            </button>
            <button className="menuButton__menuButton">
              <span className="menuButton__text">Select children</span>
              <kbd className="menuButton__kbd">Ctrl+Alt+A</kbd>
            </button>
            <button className="menuButton__menuButton">
              <span className="menuButton__text">Select none</span>
            </button>
          </div>
        </nav>
      </div>
      <div className="menu__item">
        <div className="menu__label">View</div>
      </div>
      <div className="menu__item">
        <div className="menu__label">Insert</div>
      </div>
      <div className="menu__item">
        <div className="menu__label">Format</div>
      </div>
      <div className="menu__item">
        <div className="menu__label">Help</div>
        <nav className="menu__dropdown">
          <div className="menu__group">
            <button className="menuButton__menuButton">
              <span className="menuButton__text">Keyboard shortcuts</span>
              <kbd className="menuButton__kbd">Ctrl+/</kbd>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
