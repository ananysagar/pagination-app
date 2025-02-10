import React from "react";
import "../styles.css";
import Pagination from "./Pagination";
function ProductCard({ data }) {
  return (
    <div>
        <div className="pagination-container">
            This is pagination
        </div>
      <div className="product-container">
        {data.map((product) => {
          return (
            <div className="card">
              <div className="card-container">
                <img src={product.images[0]} alt={product.title} />
                <h1 className="title">{product.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
