import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./GlobalContext";
const Navbar = () => {
  // use custom hook to get global context value
  const { openSidebar } = useGlobalContext();
  console.log(openSidebar);
  return (
    <nav className="nav">
      <h3 className="logo">strapi</h3>
      <button className="open-sidebar" onClick={openSidebar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
