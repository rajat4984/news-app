import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { useGlobalContext } from "../context";

function Navbar() {
  const { showLinks, handleShowLinks } = useGlobalContext();
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
            <li className="link">Bussiness</li>
            <li className="link">Sports</li>
            <li className="link">Science</li>
            <li className="link">Entertainment</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
