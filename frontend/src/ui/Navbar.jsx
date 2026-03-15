import React from "react";

function Navbar() {
  return (
    <header class="flex items-center justify-around py-4">
      <div class="flex items-center gap-2 cursor-pointer">
        <div class="flex text-orange-500 font-bold text-2xl">
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
        <span class="font-bold text-xl tracking-tight text-gray-900">
          DAVICI
        </span>
      </div>

      <nav class="hidden md:flex items-center gap-8">
        <a href="#" class="font-medium border-orange-500 hover:text-orange-500">
          Home
        </a>
        <a href="#" class="font-medium hover:text-orange-500 transition-colors">
          Shop
        </a>
        <a href="#" class="font-medium hover:text-orange-500 transition-colors">
          Blog
        </a>
        <a href="#" class="font-medium hover:text-orange-500 transition-colors">
          About
        </a>
        <a href="#" class="hover:text-orange-500 font-medium transition-colors">
          Contact
        </a>
      </nav>

      <div class="flex items-center gap-6">
        <div class="flex items-center bg-gray-100 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            class="bg-transparent px-4 py-2 outline-none text-sm w-40 lg:w-64"
          />
          <button class="bg-black p-2 text-white hover:bg-gray-800 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div class="flex items-center gap-4 text-gray-700">
          <button class="hover:text-orange-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          <button class="hover:text-orange-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <button class="relative hover:text-orange-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
