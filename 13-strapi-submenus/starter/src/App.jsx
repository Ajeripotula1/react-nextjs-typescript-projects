import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
const App = () => {
  return (
    <main>
      {/* Contains Logo and Button to open and close Sidebar */}
      <Navbar />
      {/* Description of App */}
      <Hero />
      {/* Sidebar contains pages and their links */}
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
