import React from "react";

const Hero = () => {
  return <section className="text-gray-600 body-font mt-20">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>get yours early
      </h1>
      <p className="mb-8 leading-relaxed text-justify">This is an online platform where you can find all kind of things and you can buy.This site is trusted. All our products are authentic. If you will be our card members then you would be discount every order. So please subscribe and collect our memberships.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Contact Us</button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/images/banner.jpg"/>
    </div>
  </div>
</section>
};

export default Hero;
