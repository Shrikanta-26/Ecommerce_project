import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" border-b border-black/10">
      {/* Logo */}
      <div className="container-custom flex items-center shrink-0 w-full py-4 mb-4  justify-between">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="flex text-orange-500 font-bold text-2xl">
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-gray-900">
          DAVICI
        </span>
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-8">
        <NavLink
          to="/"
          className="font-medium border-orange-500 hover:text-orange-500"
        >
          Home
        </NavLink>
        <NavLink to="shop" className="font-medium hover:text-orange-500 transition-colors">
          Shop
        </NavLink>
        <NavLink to="blog" className="font-medium hover:text-orange-500 transition-colors">
          Blog
        </NavLink>
        <NavLink to="about" className="font-medium hover:text-orange-500 transition-colors">
          About
        </NavLink>
        <NavLink to="contact" className="hover:text-orange-500 font-medium transition-colors">
          Contact
        </NavLink>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent px-4 py-2 outline-none text-sm w-40 lg:w-64"
          />
          <button className="bg-black p-2 text-white hover:bg-gray-800 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          {/* User */}
          <button className="hover:text-orange-500 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.384 12.5 12.5 12.5H7.49996C6.6159 12.5 5.76806 12.8512 5.14294 13.4763C4.51782 14.1014 4.16663 14.9493 4.16663 15.8333V17.5"
                stroke="#0A0A0A"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
                stroke="#0A0A0A"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Wishlist */}
          <button className="hover:text-orange-500 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15.8333 11.6667C17.075 10.45 18.3333 8.99167 18.3333 7.08333C18.3333 5.86776 17.8504 4.70197 16.9909 3.84243C16.1313 2.98289 14.9655 2.5 13.75 2.5C12.2833 2.5 11.25 2.91667 9.99996 4.16667C8.74996 2.91667 7.71663 2.5 6.24996 2.5C5.03438 2.5 3.86859 2.98289 3.00905 3.84243C2.14951 4.70197 1.66663 5.86776 1.66663 7.08333C1.66663 9 2.91663 10.4583 4.16663 11.6667L9.99996 17.5L15.8333 11.6667Z"
                stroke="#0A0A0A"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Cart */}
          <button className="relative hover:text-orange-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>

    </nav>
  );
}

export default Navbar;
