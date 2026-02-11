import React from "react";

const Item = ({ title, price, img, desc }) => {
  //   console.log("from child", item);
  return (
    <article className="item">
      <img src={img} alt="item image" />
      <div className="title-price">
        <h3>{title}</h3>
        <span>${price}</span>
      </div>
      <p className="description">{desc}</p>
    </article>
  );
};

export default Item;
