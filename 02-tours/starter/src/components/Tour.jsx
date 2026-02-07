import React from "react";
import { useState } from "react";
const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, name, info, image, price } = tour;
  return (
    <article className="tour">
      <span className="price">${price}</span>
      <img src={image} alt="tour image" />
      <div className="description">
        <h3 className="name">{name}</h3>
        <p className="content">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="readMore"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? " show less" : " read more"}
          </button>
        </p>
        <button
          className="notInterested"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
