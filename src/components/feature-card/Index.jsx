import React, { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "../timer/Timer";
const FeatureCard = ({ product }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto items-start">
        {/* <div className="flex flex-col text-center w-full mb-20"> */}
        <div>
          <h1 className="text-lg text-gray-500 tracking-widest font-medium title-font mb-2  ">
            Flash Sale
          </h1>
        </div>
        <div className="bg-white p-4">
          <div className="flex  mb-2 body-font">
            <div className="p-4 md:w-1/3">
              <h2 className="text-indigo-400 font-semibold ">On Sale Now</h2>
            </div>
            <div className="p-4 md:w-1/3">
              <h2 className="text-indigo-400 font-medium flex">
                <span className="font-semibold ">Ending :</span>
                {
                  <>
                    <Timer duration={24 * 60 * 60 * 1000} />
                  </>
                }
              </h2>
            </div>
            <div className="p-4 md:w-1/3 text-right">
              <a className="rounded-md text-indigo-400  bg-white p-1 cursor-pointer border-2 border-indigo-300 uppercase font-semibold">
                Shop More
              </a>
            </div>
          </div>
          <div className="flex flex-wrap">
            {product.map((p) => {
              return (
                <Link
                  to={`/products/${p.id}`}
                  className="lg:w-1/6 md:w-1/3 p-2 w-full h-full border-opacity-50  cursor-pointer hover:border hover:border-gray-300 hover:shadow-md"
                  key={p.id}
                >
                  <a className="block relative h-40 rounded overflow-hidden ">
                    <img
                      alt={p.title}
                      className="object-contain object-center w-full h-full block"
                      src={p.image}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {p.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {p.title}
                    </h2>
                    <p className="mt-1 text-md font-semibold">${p.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
