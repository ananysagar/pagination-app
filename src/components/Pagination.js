import React from "react";
import "../styles.css";

function Pagination({ totalPages, paginate, currentPage }) {
  return (
    <div className="pagination">
      <button onClick={() => paginate(currentPage - 1)} disabled={currentPage===1}>Previous</button>
      {[...Array(totalPages).keys()].map((number) => (
        <button
          key={number + 1}
          onClick={() => paginate(number + 1)}
          className={currentPage === number + 1 ? "active" : ""}
        >
          {number + 1}
        </button>
      ))}
      <button onClick={() => paginate(currentPage + 1)} disabled={currentPage===totalPages}>Next</button>
    </div>
  );
}

export default Pagination;
