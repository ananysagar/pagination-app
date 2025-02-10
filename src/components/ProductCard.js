import React from "react";
import "../styles.css";
function ProductCard({ data }) {
  return (
    <div className="product-continer">
      {data.map((product) => {
        return (
            <div className="card">
                <div className="card-container">
                    <img src={product.images[0]} alt={product.title}/>
                    <h1 className="title">{product.title}</h1>
                </div>
            </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
