import React from "react";
import { FaBars } from "react-icons/fa";
import NavLinks from "./Navlinks";
import { useGlobalContext } from "./GlobalContext";
const Navbar = () => {
  // use custom hook to get global context value
  const { openSidebar, setPageId } = useGlobalContext();
  console.log(openSidebar);
  const handleMouse = (e) => {
    // if not scrolling over NavLinks, hide sidebar
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav className="nav" onMouseOver={handleMouse}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="open-sidebar" onClick={openSidebar}>
          <FaBars />
        </button>
        {/* sub links */}
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
