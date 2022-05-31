import React from "react";
import { FiGithub } from "react-icons/fi";
function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <p>Made by rajat</p>
        <a href="https://github.com/rajat4984" target="_blank" className="footer-link">
          &nbsp; <FiGithub />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
