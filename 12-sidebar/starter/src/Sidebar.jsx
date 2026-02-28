import { links, socials } from "./data";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./context";
import logo from "./logo.svg";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <aside className={`sidebar ${isSidebarOpen ? "" : "hide"}`}>
      {/* <div className="sidebar-container"> */}
      <div className="header">
        <img className="logo" src={logo} alt="Codding Addict" />
        <button className="x-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      {/* Nav Links */}
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url} className="link-single">
                <span>{icon}</span>
                <span>{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {/* Nav Links */}
      <ul className="socials">
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url}>
                <span>{icon}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </aside>
  );
};

export default Sidebar;
