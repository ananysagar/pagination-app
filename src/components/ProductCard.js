import React, { useState } from "react";
import "../styles.css";
import Pagination from "./Pagination";
function ProductCard({ data }) {
  let [currentPage, setCurrentPage] = useState(1);
  let productPerPage = 10;

  let totalPages = Math.ceil(data.length / productPerPage);

  let indexOfLastProduct = currentPage * productPerPage;
  let indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <div className="pagination-container">
        <Pagination
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <div className="product-container">
        {currentProducts.map((product) => {
          return (
            <div className="card">
              <div className="card-container">
                <img src={product.thumbnail} alt={product.title} />
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
