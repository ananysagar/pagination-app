import react, { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const limit = 30;
    let allProducts = [];
    let skip = 0;

    try {
      while (allProducts.length < 194) {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        allProducts = [...allProducts, ...result.products];
        skip += limit;
      }

      setData(allProducts);
    } catch (error) {
      console.log("Error fetching data: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Pagination</h1>
      <ProductCard />
    </div>
  );
}

export default App;
