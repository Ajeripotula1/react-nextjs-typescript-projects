import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import menu from "./data";
const App = () => {
  // 1. "fetch" set Data
  const [items, setItems] = useState(menu);
  // 2. Create list of categories
  const categories = ["all", ...new Set(menu.map((item) => item.category))];
  // 3. Filter items by category
  const filterItems = (category) => {
    if (category === "all") {
      setItems(menu);
      return;
    }
    const filteredItems = menu.filter((item) => item.category === category);
    setItems(filteredItems);
  };

  return (
    <main>
      <div className="header">
        <h1 className="title">Our Menu</h1>
        <div className="underline"></div>
      </div>
      <div className="categories">
        {categories &&
          categories.map((category) => (
            <div
              className="category"
              onClick={() => filterItems(category)}
              key={category}
            >
              {category}
            </div>
          ))}
      </div>
      <Menu items={items} />
    </main>
  );
};
export default App;
