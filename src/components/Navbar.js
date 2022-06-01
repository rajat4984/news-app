import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { useGlobalContext } from "../context";

function Navbar() {
  const { showLinks, handleShowLinks, handleCategory } = useGlobalContext();
  return (
    <div>
      <nav className="navbar">
        <div className="brand-container">
          <h2>News</h2>
        </div>
        <div className="links-container">
          <button>
            <AiOutlineBars className="bar-icon" onClick={handleShowLinks} />
          </button>
          <ul className={`${showLinks ? "nav-links show-links" : "nav-links"}`}>
            <li className="link" onClick={handleCategory}>
              General
            </li>
            <li className="link" onClick={handleCategory}>
              Business
            </li>
            <li className="link" onClick={handleCategory}>
              Sports
            </li>
            <li className="link" onClick={handleCategory}>
              Science
            </li>
            <li className="link" onClick={handleCategory}>
              Entertainment
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
