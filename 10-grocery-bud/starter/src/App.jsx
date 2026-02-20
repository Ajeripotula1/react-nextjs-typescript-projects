import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";

// Container of App, maintains main items arr

// get saved items list from local storage: get items JSON string, and parse into JSON obj
const defaultList = JSON.parse(localStorage.getItem("items") || "[]");

// function to save items to local storage as strings
const setLocalStorage = (items) => {
  const js_str = JSON.stringify(items);
  console.log("saving", js_str);
  localStorage.setItem("items", js_str);
};

const App = () => {
  // arr of items
  const [items, setItems] = useState(defaultList);

  // take item name, create obj and add to items list
  const addItem = (name) => {
    const newItem = { id: nanoid(), name, completed: false };
    // add to existing items arr
    const newItems = [...items, newItem];
    setItems(newItems);
    // update local storage
    setLocalStorage(newItems);
    toast.success("Item Added to List");
  };

  // Remove item based on id
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    // update local storage
    setLocalStorage(newItems);
    toast.success("Item Removed From List");
  };
  // save items checked status to local storage
  const checkItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, completed: !item.completed };
        return updatedItem;
      }
      return item;
    });
    setItems(newItems);
    // update local storage
    setLocalStorage(newItems);
  };

  return (
    <main className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} checkItem={checkItem} />
    </main>
  );
};

export default App;
