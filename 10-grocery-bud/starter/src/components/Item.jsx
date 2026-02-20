import { useState } from "react";

const Item = ({ item, removeItem, checkItem }) => {
  // no need for state since the obj status is the source of truth
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="item">
      <div className="left">
        <input
          type="checkbox"
          className="check-box"
          checked={item.completed}
          onChange={() => checkItem(item.id)}
        />
        <span style={{ textDecoration: item.completed && "line-through" }}>
          {item.name}
        </span>
      </div>
      <div className="right">
        <button onClick={() => removeItem(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Item;
