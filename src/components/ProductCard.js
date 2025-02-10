import React from "react";
import "../styles.css";
function ProductCard({ data }) {
  return (
    <div>
      {data.map((product) => {
        return (
          <div className="card">
            <div className="card-container">
              <img
                src={product.images[0]}
                alt={product.title}
                className="title"
              />
              <div key={product.id}>{product.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
