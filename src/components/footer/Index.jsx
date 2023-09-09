import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2">
      <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">E-commerce</span>
          </a>
          <h2 className="mt-2 font-medium text-gray-900">
            Sign up & get 10% off your next order
          </h2>
            <div class=" mb-3">
              <input class="mr-3 my-3 p-2 shadow-inner text-white rounded px-3 text-sm bg-white-900  border-gray-700" placeholder="Enter your email" type="text"/>
              <button className="shadow-lg bg-indigo-500 text-white font-bold text-sm rounded px-3 py-2 mb-3">Subscribe</button>
          </div>
          <div className="">
              <FacebookIcon className="mr-1"></FacebookIcon>
              <InstagramIcon className="mr-1"></InstagramIcon>
              <TwitterIcon className="mr-1"></TwitterIcon>
              <YouTubeIcon className="mr-1"></YouTubeIcon>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Customer Care
            </h2>
            <nav className="list-none mb-10">
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800 ">Contact Us</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">FAQs</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">Return & Exchanges</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">Shipping and Handling</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">Damaged or Defected Items</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">Canceling & Changing an Order</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">Terms of Service</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Inside Grace Eleyae
            </h2>
            <nav className="list-none mb-10">
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800 ">About Us</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">GE Magazine</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">Wholesale</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
              
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              My Account
            </h2>
            <nav className="list-none mb-10">
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800 ">Sign In/Register</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">My Wishlist</a>
              </li>
              <li className="pb-1">
                <a className="text-gray-600 hover:text-gray-800">My Cart</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Top Searches
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-1">
                <a className="text-gray-600 hover:text-gray-800">Socklists</a>
              </li>
              <li className="mb-1">
                <a className="text-gray-600 hover:text-gray-800">Shipping</a>
              </li>
              <li className="mb-1">
                <a className="text-gray-600 hover:text-gray-800">Black</a>
              </li>
              <li className="mb-1">
                <a className="text-gray-600 hover:text-gray-800">Sizing</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm  sm:text-left">
            © 2023 E-Commerce —
            <a
              href="https://twitter.com/AsNoyon51"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @noyon
            </a>
          </p>
          {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
