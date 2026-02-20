import { useState } from "react";
import { toast } from "react-toastify";

// Form + Title Component: handles adding new item
const Form = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleAddItem = (e) => {
    //  prevent reload
    e.preventDefault();
    // empty item check
    if (!item) {
      // console.log("Enter a value");
      toast.error("Please Provide Value");
      return;
    }
    console.log("submitted", item);
    addItem(item); // Call parent function to add item to Items
    setItem(""); // clear input
  };

  return (
    <section className="form">
      <h3 className="title">Grocery Bud</h3>
      <form onSubmit={handleAddItem}>
        <div className="form-control">
          <input
            type="text"
            value={item}
            className="text-input"
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="text-btn">
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
