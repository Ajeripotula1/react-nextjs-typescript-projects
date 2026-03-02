// Global Context for the App to track Sidebar Open Status
import { createContext, useContext, useState } from "react";
// 1. Create the Global Context
const globalContext = createContext();

// 2. Create Context Provider which will manage the global context values
export const GlobalContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  // Provide Global Context to all Child components
  return (
    <globalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </globalContext.Provider>
  );
};
// 3. Create Custom Hook to consume/ use the context
export const useGlobalContext = () => useContext(globalContext);
