import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductCard from "./components/ProductCard/ProductCard";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const data = await fetch("http://localhost:5000/api/products");
      const products = await data.json();
      setProducts(products);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center mt-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
        <h1 className="text-3xl font-bold text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex flex-wrap justify-center mt-10">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
