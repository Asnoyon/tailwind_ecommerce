import React, { useState } from "react";
import { Link } from "react-router-dom";
const FeatureCard = ({ product }) => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto items-start">
        {/* <div className="flex flex-col text-center w-full mb-20"> */}
        <div>
          <h1 className="text-lg text-indigo-500 tracking-widest font-medium title-font mb-2  ">
            Flash Sale
          </h1>
        </div>
        <div className="bg-white p-4">
          <div className="flex  mb-2 body-font">
            <div className="p-4 md:w-1/3 ">
              <h2 className="text-red-400 font-medium ">On Sale Now</h2>
            </div>
            <div className="p-4 md:w-1/3 text-center">
              <h2 className="text-red-400 font-medium  ">
                Ending in:<span className="mx-2">{ctime}</span>
              </h2>
            </div>
            <div className="p-4 md:w-1/3 text-right">
              <a className="rounded-md text-red-400  bg-white p-1 cursor-pointer border-2 border-red-300 uppercase font-medium">
                Shop More
              </a>
            </div>
          </div>
          <div className="flex flex-wrap">
            {product.map((p) => {
              return (
                <Link
                  to={`/products/${p.id}`}
                  className="lg:w-1/4 md:w-1/2 p-2 w-full border border-opacity-50  cursor-pointer hover:border-purple-300 hover:shadow-md"
                  key={p.id}
                >
                  <a className="block relative h-48 rounded overflow-hidden">
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
