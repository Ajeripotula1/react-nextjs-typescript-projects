import { useState } from "react";
import { links, socials } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
const Navbar = () => {
  // used to control if we show links or not on small screen
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        {/* header/hero */}
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/* nav links
          - dynamically set css classes to change display from block or none
         */}
        <div className={`links-container ${showLinks ? "show" : ""}`}>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Social Links: render UL */}
        <ul className="social-icons">
          {socials.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
