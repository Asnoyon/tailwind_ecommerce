import React from "react";
import "./App.css";
import Header from "./components/header/Index";
import Home from "./modules/home/Index";

import { Routes, Route } from "react-router-dom";
import Product from "./modules/product/Index";
import Footer from "./components/footer/Index";
function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
