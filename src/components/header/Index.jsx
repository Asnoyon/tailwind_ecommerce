import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg cursor-pointer">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Letter_n.svg/1200px-Letter_n.svg.png"
            className="w-10 h-10 p-1 bg-indigo-600 text-white rounded-full"
          /> */}
          <span className="ml-3 text-xl">E-Commerce</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigation.map((a) => {
            return (
              <Link to={a.path} className="mr-5 hover:text-gray-900">
                {a.name}
              </Link>
            );
          })}
        </nav>
        <ShoppingCartIcon></ShoppingCartIcon>
      </div>
    </header>
  );
};

export default Header;
