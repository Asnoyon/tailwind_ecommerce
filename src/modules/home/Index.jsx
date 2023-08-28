import Hero from "../../components/hero/Index";
import React, { useEffect, useState } from "react";
import Stats from "../../components/state-card/Index";
import FeatureCard from "../../components/feature-card/Index";
import ProductsCard from "../../components/products-card/Index";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [flashSale, setFlashSale] = useState([]);
  useEffect(() => {
    const fetchFlashSale = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=6");
      const data = await res.json();
      setFlashSale(data);
    };
    fetchFlashSale();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Hero />

      <FeatureCard product={flashSale} />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div>Loading....</div>
      )}

      <Stats />
    </div>
  );
};

export default Home;
