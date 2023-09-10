import React from "react";
import "./App.css";
import Header from "./components/header/Index";
import Home from "./modules/home/Index";

import { Routes, Route } from "react-router-dom";
import Product from "./modules/product/Index";
import Footer from "./components/footer/Index";
import Products from "./modules/products";
import ContactUs from "./components/contact";

function App() {
  return (
    <div className="bg-slate-100">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="*" element={<div>404</div>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
