import React from "react";
import Item from "./Item";

const Menu = ({ items }) => {
  return (
    <section className="menu">
      {items.length > 0 &&
        items.map((item) => <Item key={item.id} {...item} />)}
    </section>
  );
};

export default Menu;
