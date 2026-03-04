import React from "react";
import subLinks from "./data";
import { useGlobalContext } from "./GlobalContext";

const NavLinks = () => {
  const { pageId, setPageId } = useGlobalContext();
  return (
    <div className="nav-sub-links">
      {subLinks.map((subLink) => {
        return (
          <button
            key={subLink.pageId}
            className="nav-link"
            onMouseEnter={() => {
              // update pageId Global context
              setPageId(subLink.pageId);
              console.log(subLink.page, pageId);
            }}
            // onMouseLeave={() => {
            //   // clear the pageId global context
            //   console.log("Leaving");
            //   setPageId(null);
            // }}
          >
            {subLink.page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
