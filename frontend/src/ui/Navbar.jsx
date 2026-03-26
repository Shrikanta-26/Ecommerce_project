import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
 
    //  --breakpoint-*: initial;
    // --breakpoint-xsm: 360px;
    // --breakpoint-xs: 476px;
    // --breakpoint-sm: 640px;
    // --breakpoint-md: 768px;
    // --breakpoint-bs: 900px;
    // --breakpoint-lg: 1024px;
    // --breakpoint-xl: 1280px;

    <nav className="border-b border-gray-100 sticky top-0 z-50">
      {/* Container restricted to your 1180px logic */}

      <div className="container-custom flex items-center py-4 px-2 justify-between gap-2 xsm:px-3 xs:px-4 sm:px-6 transition-all duration-300">
        {/* --- LOGO SECTION --- */}
        <div className="flex items-center gap-2 cursor-pointer bs">
          <div className="flex text-orange-500 font-bold text-2xl">
            <span className="animate-pulse">|</span>
            <span className="opacity-80">|</span>
            <span className="opacity-60">|</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900 bs:text-2xl">
            DAVICI
          </span>
        </div>

        {/* --- CENTER MENU (Hidden until 900px / bs) --- */}
        <div className="hidden bs:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-all duration-200 hover:text-orange-500 relative group ${
                  isActive ? "text-orange-500" : "text-gray-600"
                }`
              }
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* --- RIGHT SIDE ACTIONS --- */}
        <div className="flex items-center  gap-2 xs:gap-4 sm:gap-8 md:gap-6">
          {/* SEARCH: Compact on MD, Wide on LG */}
          <div className="hidden justify-between  xs:flex md:flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-orange-500/10 transition-all">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent px-4 py-2 outline-none text-sm sm:w-64 md:w-90 bs:w-60 lg:w-66"
            />
            <button className="bg-black p-2.5 text-white hover:bg-orange-600 transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                  stroke="white"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 14L11.1333 11.1333"
                  stroke="white"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* ICONS */}
          <div className="flex justify-between items-center gap-3 sm:gap-4 text-gray-700 xsm:gap-4 xs:gap-2 ">
            <NavLink
              to="/"
              className="hover:text-orange-500 transition-colors xs:block"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.384 12.5 12.5 12.5H7.49996C6.6159 12.5 5.76806 12.8512 5.14294 13.4763C4.51782 14.1014 4.16663 14.9493 4.16663 15.8333V17.5"
                  stroke="#0A0A0A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
                  stroke="#0A0A0A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NavLink>

            <NavLink
              to="/"
              className="relative hover:text-orange-500 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 11.6667C17.075 10.45 18.3333 8.99167 18.3333 7.08333C18.3333 5.86776 17.8504 4.70197 16.9909 3.84243C16.1313 2.98289 14.9655 2.5 13.75 2.5C12.2833 2.5 11.25 2.91667 9.99996 4.16667C8.74996 2.91667 7.71663 2.5 6.24996 2.5C5.03438 2.5 3.86859 2.98289 3.00905 3.84243C2.14951 4.70197 1.66663 5.86776 1.66663 7.08333C1.66663 9 2.91663 10.4583 4.16663 11.6667L9.99996 17.5L15.8333 11.6667Z"
                  stroke="#0A0A0A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {/* <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">1</span> */}
            </NavLink>

            <button className="hover:text-orange-500 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66671 18.3333C7.12694 18.3333 7.50004 17.9602 7.50004 17.5C7.50004 17.0398 7.12694 16.6667 6.66671 16.6667C6.20647 16.6667 5.83337 17.0398 5.83337 17.5C5.83337 17.9602 6.20647 18.3333 6.66671 18.3333Z"
                  stroke="#0A0A0A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8333 18.3333C16.2936 18.3333 16.6667 17.9602 16.6667 17.5C16.6667 17.0398 16.2936 16.6667 15.8333 16.6667C15.3731 16.6667 15 17.0398 15 17.5C15 17.9602 15.3731 18.3333 15.8333 18.3333Z"
                  stroke="#0A0A0A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.70837 1.70833H3.37504L5.59171 12.0583C5.67302 12.4374 5.88393 12.7762 6.18813 13.0165C6.49233 13.2569 6.8708 13.3836 7.25837 13.375H15.4084C15.7877 13.3744 16.1554 13.2444 16.4509 13.0065C16.7463 12.7687 16.9518 12.4371 17.0334 12.0667L18.4084 5.875H4.26671"
                  stroke="#0A0A0A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            {/* MOBILE HAMBURGER (Hidden from bs/900px onwards) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bs:hidden p-1 text-gray-900 hover:text-orange-500 transition-colors"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h16 M4 12h16 M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- RESPONSIVE MOBILE MENU --- */}

      <div
        className={`border  border-gray-200 bs:hidden transition-all duration-300 ease-in-out  ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-3  space-y-6">
          <div className="flex flex-col gap-3 xs:items-center ">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-black p-2 hover:bg-gray-400 transition-all duration-300 ease-in-out  "
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile-only Search Bar (Visible below md/768px) */}
          <div className="xs:hidden md:hidden pt-4 ">
            <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent px-4 py-3 w-full outline-none text-sm font-bold"
              />
              <button className="bg-black p-3 text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
