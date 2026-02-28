import React from "react";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";
// Contains Buttons to open modal and sidebar
const Home = () => {
  // import and invoke our context, and destructure needed data
  const { openModal, openSidebar } = useAppContext();

  //   console.log(openSidebar, openModal);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="modal-toggle" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
