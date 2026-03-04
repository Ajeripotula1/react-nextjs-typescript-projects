import React, { useEffect } from "react";
// takes the pageID, and renders the name and sub links accordingly
import subLinks from "./data";
import { useGlobalContext } from "./GlobalContext";
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  // find the current page and return the page links
  // let currPage = null; state?
  const currentPage = subLinks.find((link) => link.pageId === pageId);
  console.log("YIKES", currentPage);

  // useEffect(() => {
  //   console.log("use effecting over the screen rn XD!");
  //   currentPage();
  // }, [pageId]);
  // return a div depending on what the current pageID is
  return (
    <div className={currentPage ? "submenu-center" : "submenu-hide"}>
      <div className="submenu" onMouseLeave={() => setPageId(null)}>
        <h5>{currentPage?.page}</h5>
        <div
          className="submenu-links"
          style={{
            gridTemplateColumns:
              currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
          }}
        >
          {currentPage?.links?.map((link) => {
            const { id, label, icon, url } = link;
            return (
              <a key={id} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Submenu;
