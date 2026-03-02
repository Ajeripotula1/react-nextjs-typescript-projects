import React from "react";
// takes the pageID, and renders the name and sub links accordingly
import subLinks from "./data";
import { useGlobalContext } from "./GlobalContext";
const Submenu = () => {
  const { pageId } = useGlobalContext();

  return (
    <div>
      <h1>submenu</h1>
    </div>
  );
};

export default Submenu;
