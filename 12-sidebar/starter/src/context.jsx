import { createContext, useContext, useState } from "react";

// Creating our context
export const AppContext = createContext();

// Provider Component that will provide context to all children components
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    console.log("opening sidebar");
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    console.log("opening modal");

    setIsModalOpen(true);
  };
  const closeModal = () => {
    console.log("closing modal");
    setIsModalOpen(false);
  };

  return (
    // provide context to children
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to use the context as one of the children
export const useAppContext = () => useContext(AppContext);
