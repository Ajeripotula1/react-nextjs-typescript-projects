import React from "react";
import subLinks from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./GlobalContext";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar" : "hidden"}>
      <button className="sidebar-close btn" onClick={closeSidebar}>
        <FaTimes />
      </button>
      {subLinks.map((subLink) => {
        const { pageId, page, links } = subLink;
        return (
          // Link Sections
          <div key={pageId} className="sidebar-section">
            <h2>{page}</h2>
            {/* Grid layout of links */}
            <ul className="sidebar-grid">
              {links.map((link) => {
                const { id, label, icon, url } = link;
                return (
                  // individual link element
                  <li key={id} className="sidebar-item">
                    <a href={url} className="sidebar-link">
                      {icon}
                      <span>{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
