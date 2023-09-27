import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      try {
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleCart = ((product)=>{
    console.log(product);
    const data= JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find((item)=>item.id === product.id)
  })

  if (!Object.keys(product).length > 0) return <div>Loading...</div>;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="products"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded max-h-[400px]"
            src={product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6  lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-3">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
              {product?.title}
            </h1>
            <p className="leading-relaxed ">{product?.description}</p>

            <div className="flex mt-12 justify-between items-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <div className="flex">
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mr-2">
                  Buy It Now
                </button>
                <button className="lex ml-auto  bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded mr-2" onClick={()=> handleCart(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
