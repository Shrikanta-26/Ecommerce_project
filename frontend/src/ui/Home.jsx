import React from "react";
import Hero from "./Hero";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";


function Home() {
  return (
    <>
      <Hero />
      <section className="py-4 px-2 border-b border-black/10 xsm:px-3 xs:px-4 sm:px-6 md:px-4 bs:px-3 lg:px-2">
        <div className="container-custom">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex space-x-4 w-full">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 18V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H5"
                    stroke="#FF6900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 18H9"
                    stroke="#FF6900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17V13.35C21.9996 13.1231 21.922 12.903 21.78 12.726L18.3 8.376C18.2065 8.25888 18.0878 8.16428 17.9528 8.0992C17.8178 8.03412 17.6699 8.00021 17.52 8H14"
                    stroke="#FF6900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                    stroke="#FF6900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z"
                    stroke="#FF6900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-[14px] font-bold text-slate-900 ">Free Shipping</h3>
                <p className="text-[12px] text-slate-500 ">
                  Free delivery on orders over $50
                </p>
              </div>
            </div>

            <div className="flex space-x-4 w-full">
              <div className="flex items-center justify-center  w-10 h-10 bg-orange-100 rounded-xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6.00002C4 5.73481 4.10536 5.48045 4.29289 5.29292C4.48043 5.10538 4.73478 5.00002 5 5.00002C7 5.00002 9.5 3.80002 11.24 2.28002C11.4519 2.09902 11.7214 1.99957 12 1.99957C12.2786 1.99957 12.5481 2.09902 12.76 2.28002C14.51 3.81002 17 5.00002 19 5.00002C19.2652 5.00002 19.5196 5.10538 19.7071 5.29292C19.8946 5.48045 20 5.73481 20 6.00002V13Z"
                    stroke="#FF6900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-slate-900">Secure Payment</h3>
                <p className="text-[12px] text-slate-500">100% secure transactions</p>
              </div>
            </div>

            <div className="flex space-x-4 w-full">
              <div className=" flex items-center justify-center  w-10 h-10 bg-orange-100 rounded-xl">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12H4C4.53043 12 5.03914 12.2107 5.41421 12.5858C5.78929 12.9609 6 13.4696 6 14V17C6 17.5304 5.78929 18.0391 5.41421 18.4142C5.03914 18.7893 4.53043 19 4 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H16C15.4696 19 14.9609 18.7893 14.5858 18.4142C14.2107 18.0391 14 17.5304 14 17V14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H19"
                    stroke="#FF6900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-slate-900">24/7 Support</h3>
                <p className="text-[12px] text-slate-500">Dedicated customer service</p>
              </div>
            </div>

            <div className="flex space-x-4 w-full">
              <div className="flex items-center justify-center  w-10 h-10 bg-orange-100 rounded-xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z"
                    stroke="#FF6900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 10H22"
                    stroke="#FF6900"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-slate-900">Easy Returns</h3>
                <p className="text-[12px] text-slate-500">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="pt-4 px-2 container-custom xsm:px-3 xs:px-4 sm:px-6 md:px-4 bs:px-3 lg:px-2">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold text-[#0A0A0A] mb-3">Shop by Categories</h2>
          <p className="text-[#4A5565] text-[16px]">
            Explore our diverse collection of products
          </p>
        </div>

        <div className="grid grid-cols-1 xsm:grid-cols-2  xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 bs:grid-cols-5 lg:grid-cols-5 gap-6  px-16 xsm:px-0">
          <div className="border shadow bg-[#F9FAFB] border-[#F1F5F9] rounded-2xl p-6 flex flex-col items-center group cursor-pointer transition-all hover:shadow-sm">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=500"
                alt="Furniture"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 7.50004V5.00004C15.8333 4.55801 15.6577 4.13409 15.3452 3.82153C15.0326 3.50897 14.6087 3.33337 14.1667 3.33337H5.83332C5.3913 3.33337 4.96737 3.50897 4.65481 3.82153C4.34225 4.13409 4.16666 4.55801 4.16666 5.00004V7.50004"
                  stroke="#FF6900"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 13.3333C2.5 13.7754 2.67559 14.1993 2.98816 14.5118C3.30072 14.8244 3.72464 15 4.16667 15H15.8333C16.2754 15 16.6993 14.8244 17.0118 14.5118C17.3244 14.1993 17.5 13.7754 17.5 13.3333V9.16667C17.5 8.72464 17.3244 8.30072 17.0118 7.98816C16.6993 7.6756 16.2754 7.5 15.8333 7.5C15.3913 7.5 14.9674 7.6756 14.6548 7.98816C14.3423 8.30072 14.1667 8.72464 14.1667 9.16667V10.4167C14.1667 10.5272 14.1228 10.6332 14.0446 10.7113C13.9665 10.7894 13.8605 10.8333 13.75 10.8333H6.25C6.13949 10.8333 6.03351 10.7894 5.95537 10.7113C5.87723 10.6332 5.83333 10.5272 5.83333 10.4167V9.16667C5.83333 8.72464 5.65774 8.30072 5.34518 7.98816C5.03262 7.6756 4.60869 7.5 4.16667 7.5C3.72464 7.5 3.30072 7.6756 2.98816 7.98816C2.67559 8.30072 2.5 8.72464 2.5 9.16667V13.3333Z"
                  stroke="#FF6900"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.16666 15V16.6667"
                  stroke="#FF6900"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8333 15V16.6667"
                  stroke="#FF6900"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="font-bold text-[#101828] text-[15px]">Furniture</span>
            </div>
            <p className="text-[#4A5565] text-xs">11 Products</p>
          </div>

          <div className="border shadow bg-[#F9FAFB] border-[#F1F5F9] rounded-2xl p-7 flex flex-col items-center group cursor-pointer transition-all hover:shadow-sm">
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500"
                alt="Electronics"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6666 13.3333V5.83329C16.6666 5.39127 16.491 4.96734 16.1785 4.65478C15.8659 4.34222 15.442 4.16663 15 4.16663H4.99998C4.55795 4.16663 4.13403 4.34222 3.82147 4.65478C3.5089 4.96734 3.33331 5.39127 3.33331 5.83329V13.3333M16.6666 13.3333H3.33331M16.6666 13.3333L17.7333 15.4583C17.7976 15.5858 17.828 15.7276 17.8216 15.8703C17.8153 16.0129 17.7725 16.1515 17.6972 16.2728C17.6219 16.3941 17.5167 16.494 17.3917 16.563C17.2667 16.6319 17.1261 16.6676 16.9833 16.6666H3.01664C2.87388 16.6676 2.73326 16.6319 2.60826 16.563C2.48326 16.494 2.37808 16.3941 2.30279 16.2728C2.2275 16.1515 2.18464 16.0129 2.17831 15.8703C2.17198 15.7276 2.2024 15.5858 2.26664 15.4583L3.33331 13.3333"
                  stroke="#FF6900"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="font-bold text-[#101828] text-[15px]">Electronics</span>
            </div>
            <p className="text-[#4A5565] text-xs">3 Products</p>
          </div>

          <div className="border shadow bg-[#F9FAFB] border-[#F1F5F9] rounded-2xl p-7 flex flex-col items-center group cursor-pointer transition-all hover:shadow-sm">
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500"
                alt="Fashion"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9833 2.88329L13.3333 1.66663C13.3333 2.55068 12.9821 3.39853 12.357 4.02365C11.7319 4.64877 10.884 4.99996 9.99997 4.99996C9.11592 4.99996 8.26807 4.64877 7.64295 4.02365C7.01783 3.39853 6.66664 2.55068 6.66664 1.66663L3.01664 2.88329C2.63946 3.00895 2.31962 3.26531 2.11485 3.60608C1.91008 3.94685 1.83387 4.3496 1.89997 4.74163L2.38331 7.63329C2.41504 7.82905 2.51554 8.00708 2.66676 8.13539C2.81797 8.26369 3.00999 8.33386 3.20831 8.33329H4.99997V16.6666C4.99997 17.5833 5.74997 18.3333 6.66664 18.3333H13.3333C13.7753 18.3333 14.1993 18.1577 14.5118 17.8451C14.8244 17.5326 15 17.1087 15 16.6666V8.33329H16.7916C16.99 8.33386 17.182 8.26369 17.3332 8.13539C17.4844 8.00708 17.5849 7.82905 17.6166 7.63329L18.1 4.74163C18.1661 4.3496 18.0899 3.94685 17.8851 3.60608C17.6803 3.26531 17.3605 3.00895 16.9833 2.88329Z"
                  stroke="#FF6900"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="font-bold text-[#101828] text-[15px]">Fashion</span>
            </div>
            <p className="text-[#4A5565] text-xs">3 Products</p>
          </div>

          <div className="border shadow bg-[#F9FAFB] border-[#F1F5F9] rounded-2xl p-7 flex flex-col items-center group cursor-pointer transition-all hover:shadow-sm">
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1581781870027-04212e231e96?auto=format&fit=crop&q=80&w=500"
                alt="Home Decor"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1.66663L2.5 4.99996V16.6666C2.5 17.1087 2.67559 17.5326 2.98816 17.8451C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8451C17.3244 17.5326 17.5 17.1087 17.5 16.6666V4.99996L15 1.66663H5Z"
                  stroke="#FF6900"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 5H17.5"
                  stroke="#FF6900"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3333 8.33337C13.3333 9.21743 12.9821 10.0653 12.357 10.6904C11.7319 11.3155 10.884 11.6667 9.99996 11.6667C9.1159 11.6667 8.26806 11.3155 7.64294 10.6904C7.01782 10.0653 6.66663 9.21743 6.66663 8.33337"
                  stroke="#FF6900"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="font-bold text-[#101828] text-[15px]">Home Decor</span>
            </div>
            <p className="text-[#4A5565] text-xs">3 Products</p>
          </div>

          <div className="border shadow bg-[#F9FAFB] border-[#F1F5F9] rounded-2xl p-7 flex flex-col items-center group cursor-pointer transition-all hover:shadow-sm">
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500"
                alt="Accessories"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <svg
                className="w-5 h-5 text-[#FF6B00]"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              <span className="font-bold text-[#101828] text-[15px]">Accessories</span>
            </div>
            <p className="text-[#4A5565] text-xs">3 Products</p>
          </div>
        </div>
      </section>

      {/* New section */}

       <section className="container-custom pt-10 px-2 xsm:px-3 xs:px-4 sm:px-6 md:px-4 bs:px-3 lg:px-2">
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 7L13.5 15.5L8.5 10.5L2 17"
                stroke="#FF6900"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 7H22V13"
                stroke="#FF6900"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 className="text-[20px] font-bold text-gray-900 xs:text-2xl sm:text-2xl md:text-3xl bs:text-4xl">Trending Now</h2>
          </div>
          <p className="text-gray-500 mt-1 ml-4 md:text-[20px]">Most popular items this week</p>
        </div>

        <div className="grid grid-cols-1 xsm:grid-cols-2 xs:grid-cols-3  sm:grid-cols-3 md:grid-cols-4 bs:grid-cols-4 lg:grid-cols-5 gap-6 px-12 xsm:px-0">
          <div className="border rounded-2xl border-gray-100 shadow-2xl">
            <div className="relative aspect-square  p-6 xsm: xs: sm: md: lg:">
              <span className="absolute top-2 right-2 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-xl object-contain"
              />
            </div>

            <div className="p-4 bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
          <div className="border rounded-2xl border-gray-100 shadow-2xl">
            <div className="relative aspect-square  p-6 xsm: xs: sm: md: lg:">
              <span className="absolute top-2 right-2 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-xl object-contain"
              />
            </div>

            <div className="p-4 bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
          <div className="border rounded-2xl border-gray-100 shadow-2xl">
            <div className="relative aspect-square  p-6 xsm: xs: sm: md: lg:">
              <span className="absolute top-2 right-2 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-xl object-contain"
              />
            </div>

            <div className="p-4 bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
          <div className="border rounded-2xl border-gray-100 shadow-2xl">
            <div className="relative aspect-square  p-6 xsm: xs: sm: md: lg:">
              <span className="absolute top-2 right-2 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-xl object-contain"
              />
            </div>

            <div className="p-4 bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
          <div className="border rounded-2xl border-gray-100 shadow-2xl">
            <div className="relative aspect-square  p-6 xsm: xs: sm: md: lg:">
              <span className="absolute top-2 right-2 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-xl object-contain"
              />
            </div>

            <div className="p-4 bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
          <div className="border rounded-2xl border-gray-100 shadow-2xl">
            <div className="relative aspect-square  p-6 xsm: xs: sm: md: lg:">
              <span className="absolute top-2 right-2 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-xl object-contain"
              />
            </div>

            <div className="p-4 bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* New Section? */}
       <section className="mt-6 bg-[linear-gradient(135deg,#FF6900_0%,#FB2C36_100%)] py-4 px-2  xsm:px-3 xs:px-4 sm:px-6 md:px-4 bs:px-3 lg:px-2 lg:py-8">
        <div className="text-center mb-4 xsm:mb-12">
          <div className="flex items-center justify-center gap-2 text-4xl font-bold mb-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.956761">
                <path
                  d="M5.33336 18.6666C5.08105 18.6674 4.83367 18.5967 4.61997 18.4625C4.40626 18.3284 4.23501 18.1364 4.1261 17.9088C4.01718 17.6812 3.97509 17.4273 4.0047 17.1768C4.0343 16.9262 4.1344 16.6892 4.29336 16.4932L17.4934 2.89323C17.5924 2.77893 17.7273 2.7017 17.876 2.6742C18.0247 2.6467 18.1783 2.67058 18.3117 2.7419C18.445 2.81322 18.5501 2.92775 18.6098 3.0667C18.6695 3.20565 18.6801 3.36076 18.64 3.50656L16.08 11.5332C16.0045 11.7353 15.9792 11.9526 16.0062 12.1666C16.0331 12.3806 16.1116 12.5848 16.2348 12.7618C16.3581 12.9388 16.5224 13.0832 16.7137 13.1828C16.9051 13.2823 17.1177 13.3339 17.3334 13.3332H26.6667C26.919 13.3324 27.1664 13.4031 27.3801 13.5373C27.5938 13.6714 27.7651 13.8634 27.874 14.091C27.9829 14.3186 28.025 14.5724 27.9954 14.823C27.9658 15.0736 27.8657 15.3106 27.7067 15.5066L14.5067 29.1066C14.4077 29.2208 14.2728 29.2981 14.1241 29.3256C13.9754 29.3531 13.8217 29.3292 13.6884 29.2579C13.555 29.1866 13.4499 29.072 13.3903 28.9331C13.3306 28.7941 13.3199 28.639 13.36 28.4932L15.92 20.4666C15.9955 20.2645 16.0209 20.0472 15.9939 19.8332C15.9669 19.6192 15.8885 19.415 15.7652 19.238C15.642 19.061 15.4777 18.9165 15.2863 18.817C15.095 18.7175 14.8824 18.6659 14.6667 18.6666H5.33336Z"
                  stroke="white"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <h1 className="text-[20px] font-bold text-gray-900 xs:text-2xl sm:text-2xl md:text-3xl bs:text-4xl">Flash Sale</h1>
          </div>
          <p className="mt-1 ml-4 md:text-[20px] text-orange-100 text-[14px] mb-3">
            Limited time offers - Don't miss out!
          </p>

          <div className="flex flex-col items-center gap-4 ">
            <div className="flex items-center gap-2 text-sm font-medium">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 18.3334C14.6024 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6025 5.39765 18.3334 10 18.3334Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 5V10L13.3333 11.6667"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Ends in:</span>
            </div>

            <div className="flex items-center gap-4 text-white mb-4">
              <div className="flex flex-col items-center">
                <div className="bg-white/20  rounded-lg w-14 h-14 flex items-center justify-center text-2xl font-bold">
                  12
                </div>
                <span className="text-[10px] uppercase mt-2 tracking-widest opacity-90">
                  Hours
                </span>
              </div>
              <span className="text-2xl font-bold pb-6">:</span>
              <div className="flex flex-col items-center">
                <div className="bg-white/20  rounded-lg w-14 h-14 flex items-center justify-center text-2xl font-bold">
                  34
                </div>
                <span className="text-[10px] uppercase mt-2 tracking-widest opacity-90">
                  Minutes
                </span>
              </div>
              <span className="text-2xl font-bold pb-6">:</span>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 rounded-lg w-14 h-14 flex items-center justify-center text-2xl font-bold">
                  25
                </div>
                <span className="text-[10px] uppercase mt-2 tracking-widest opacity-90">
                  Seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      <div className="container-custom grid grid-cols-1 xsm:grid-cols-2 xs:grid-cols-3  sm:grid-cols-3 md:grid-cols-4 bs:grid-cols-4 lg:grid-cols-5 gap-6 px-12 xsm:px-0">
          <div className="bg-white rounded-2xl shadow-2xl">
            <div className="relative aspect-square p-4">
              <span className="absolute top-2 right-4 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="p-4 rounded-b-2xl bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
           <div className="bg-white rounded-2xl shadow-2xl">
            <div className="relative aspect-square p-4">
              <span className="absolute top-2 right-4 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="p-4 rounded-b-2xl bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
           <div className="bg-white rounded-2xl shadow-2xl">
            <div className="relative aspect-square p-4">
              <span className="absolute top-2 right-4 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="p-4 rounded-b-2xl bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
           <div className="bg-white rounded-2xl shadow-2xl">
            <div className="relative aspect-square p-4">
              <span className="absolute top-2 right-4 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="p-4 rounded-b-2xl bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* new section */}

        <section className="container-custom text-gray-900 px-2 xsm:px-3 xs:px-4 sm:px-6 md:px-4 bs:px-3 lg:px-2">
        <div className="mt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-8">
            <h2 className="text-2xl font-bold text-center xs:text-[32px] md:text-2xl">Hot Products</h2>
            <div className="flex items-center justify-between gap-2 md:gap-3">
              <nav className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-wider text-gray-400   xsm:gap-3 xsm:text-[11px]  xs:gap-6 xs:text-[14px] sm:gap-10 md:gap-6 ">
                <NavLink to="/" className="hover:text-orange-600 pb-4.5 -mb-[18px]">
                  Latest Products
                </NavLink>
                <NavLink to="/" className="hover:text-orange-600 ">
                  Top Rated
                </NavLink>
                <NavLink to="/" className="hover:text-orange-600 ">
                  Best Sellers
                </NavLink>
              </nav>

              <button className="flex items-center gap-2 border cursor-pointer border-gray-200 px-4 py-2 rounded text-[9px] font-bold uppercase hover:bg-gray-50 transition-colors xsm:text-[10px] xs:text-[14px]">
                All products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

<div className="grid grid-cols-1 xsm:grid-cols-2 xs:grid-cols-3  sm:grid-cols-3 md:grid-cols-4 bs:grid-cols-4 lg:grid-cols-5 gap-6 px-12 xsm:px-0">
          <div className="bg-white rounded-2xl shadow-2xl">
            <div className="relative aspect-square p-4">
              <span className="absolute top-2 right-4 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="p-4 rounded-b-2xl bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
           <div className="bg-white rounded-2xl shadow-2xl">
            <div className="relative aspect-square p-4">
              <span className="absolute top-2 right-4 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="p-4 rounded-b-2xl bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
           <div className="bg-white rounded-2xl shadow-2xl">
            <div className="relative aspect-square p-4">
              <span className="absolute top-2 right-4 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="p-4 rounded-b-2xl bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
           <div className="bg-white rounded-2xl shadow-2xl">
            <div className="relative aspect-square p-4">
              <span className="absolute top-2 right-4 bg-orange-500 text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                Hot
              </span>
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80"
                alt="Chair"
                className="w-full rounded-2xl object-contain"
              />
            </div>

            <div className="p-4 rounded-b-2xl bg-[#F8F9FA] border-t border-gray-50">
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                <span className="text-[10px] text-gray-400">(8 reviews)</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Aqui Glades Accent Chair
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">$30.00</span>
                <span className="text-base font-bold text-orange-600">$25.00</span>
              </div>
            </div>
          </div>
        </div>
         
        </div>
      </section>  

      {/* Testimonial section */}
       <section className="py-10 px-2 xsm:px-3 xs:px-4 sm:px-6 md:px-4 bs:px-3 lg:px-2">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 xs:text-3xl">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-[15px] xs:text-[18px]">
              Join thousands of satisfied customers who trust us for their
              shopping needs
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between xs:p-4 lg:p-6">
              <div>
                <span className="text-orange-400 text-xl block mb-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 5C25.7826 5 24.9348 5.35119 24.3097 5.97631C23.6845 6.60143 23.3333 7.44928 23.3333 8.33333V18.3333C23.3333 19.2174 23.6845 20.0652 24.3097 20.6904C24.9348 21.3155 25.7826 21.6667 26.6667 21.6667C27.1087 21.6667 27.5326 21.8423 27.8452 22.1548C28.1577 22.4674 28.3333 22.8913 28.3333 23.3333V25C28.3333 25.8841 27.9822 26.7319 27.357 27.357C26.7319 27.9821 25.8841 28.3333 25 28.3333C24.558 28.3333 24.1341 28.5089 23.8215 28.8215C23.5089 29.134 23.3333 29.558 23.3333 30V33.3333C23.3333 33.7754 23.5089 34.1993 23.8215 34.5118C24.1341 34.8244 24.558 35 25 35C27.6522 35 30.1957 33.9464 32.0711 32.0711C33.9464 30.1957 35 27.6522 35 25V8.33333C35 7.44928 34.6488 6.60143 34.0237 5.97631C33.3986 5.35119 32.5507 5 31.6667 5H26.6667Z"
                      stroke="#FFD6A7"
                      stroke-width="3.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33333 5C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V18.3333C5 19.2174 5.35119 20.0652 5.97631 20.6904C6.60143 21.3155 7.44928 21.6667 8.33333 21.6667C8.77536 21.6667 9.19928 21.8423 9.51184 22.1548C9.8244 22.4674 10 22.8913 10 23.3333V25C10 25.8841 9.64881 26.7319 9.02369 27.357C8.39857 27.9821 7.55072 28.3333 6.66667 28.3333C6.22464 28.3333 5.80072 28.5089 5.48816 28.8215C5.17559 29.134 5 29.558 5 30V33.3333C5 33.7754 5.17559 34.1993 5.48816 34.5118C5.80072 34.8244 6.22464 35 6.66667 35C9.31883 35 11.8624 33.9464 13.7377 32.0711C15.6131 30.1957 16.6667 27.6522 16.6667 25V8.33333C16.6667 7.44928 16.3155 6.60143 15.6904 5.97631C15.0652 5.35119 14.2174 5 13.3333 5H8.33333Z"
                      stroke="#FFD6A7"
                      stroke-width="3.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex mb-2">
                  <span className="text-orange-500 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "The quality and design of the products exceeded my
                  expectations. Fast shipping and excellent customer service!"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150?u=sarah"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Interior Designer</p>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between xs:p-4 lg:p-6">
              <div>
                <span className="text-orange-400 text-5xl  block mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 5C25.7826 5 24.9348 5.35119 24.3097 5.97631C23.6845 6.60143 23.3333 7.44928 23.3333 8.33333V18.3333C23.3333 19.2174 23.6845 20.0652 24.3097 20.6904C24.9348 21.3155 25.7826 21.6667 26.6667 21.6667C27.1087 21.6667 27.5326 21.8423 27.8452 22.1548C28.1577 22.4674 28.3333 22.8913 28.3333 23.3333V25C28.3333 25.8841 27.9822 26.7319 27.357 27.357C26.7319 27.9821 25.8841 28.3333 25 28.3333C24.558 28.3333 24.1341 28.5089 23.8215 28.8215C23.5089 29.134 23.3333 29.558 23.3333 30V33.3333C23.3333 33.7754 23.5089 34.1993 23.8215 34.5118C24.1341 34.8244 24.558 35 25 35C27.6522 35 30.1957 33.9464 32.0711 32.0711C33.9464 30.1957 35 27.6522 35 25V8.33333C35 7.44928 34.6488 6.60143 34.0237 5.97631C33.3986 5.35119 32.5507 5 31.6667 5H26.6667Z"
                      stroke="#FFD6A7"
                      stroke-width="3.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33333 5C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V18.3333C5 19.2174 5.35119 20.0652 5.97631 20.6904C6.60143 21.3155 7.44928 21.6667 8.33333 21.6667C8.77536 21.6667 9.19928 21.8423 9.51184 22.1548C9.8244 22.4674 10 22.8913 10 23.3333V25C10 25.8841 9.64881 26.7319 9.02369 27.357C8.39857 27.9821 7.55072 28.3333 6.66667 28.3333C6.22464 28.3333 5.80072 28.5089 5.48816 28.8215C5.17559 29.134 5 29.558 5 30V33.3333C5 33.7754 5.17559 34.1993 5.48816 34.5118C5.80072 34.8244 6.22464 35 6.66667 35C9.31883 35 11.8624 33.9464 13.7377 32.0711C15.6131 30.1957 16.6667 27.6522 16.6667 25V8.33333C16.6667 7.44928 16.3155 6.60143 15.6904 5.97631C15.0652 5.35119 14.2174 5 13.3333 5H8.33333Z"
                      stroke="#FFD6A7"
                      stroke-width="3.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex mb-4">
                  <span className="text-orange-500 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-700 mb-8">
                  "I transformed my entire living space with products from this
                  store. The variety and affordability are unmatched!"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150?u=michael"
                  alt="Michael Chen"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 ">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Home Owner</p>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between xs:p-4 lg:p-6">
              <div>
                <span className="text-orange-400 text-5xl block mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 5C25.7826 5 24.9348 5.35119 24.3097 5.97631C23.6845 6.60143 23.3333 7.44928 23.3333 8.33333V18.3333C23.3333 19.2174 23.6845 20.0652 24.3097 20.6904C24.9348 21.3155 25.7826 21.6667 26.6667 21.6667C27.1087 21.6667 27.5326 21.8423 27.8452 22.1548C28.1577 22.4674 28.3333 22.8913 28.3333 23.3333V25C28.3333 25.8841 27.9822 26.7319 27.357 27.357C26.7319 27.9821 25.8841 28.3333 25 28.3333C24.558 28.3333 24.1341 28.5089 23.8215 28.8215C23.5089 29.134 23.3333 29.558 23.3333 30V33.3333C23.3333 33.7754 23.5089 34.1993 23.8215 34.5118C24.1341 34.8244 24.558 35 25 35C27.6522 35 30.1957 33.9464 32.0711 32.0711C33.9464 30.1957 35 27.6522 35 25V8.33333C35 7.44928 34.6488 6.60143 34.0237 5.97631C33.3986 5.35119 32.5507 5 31.6667 5H26.6667Z"
                      stroke="#FFD6A7"
                      stroke-width="3.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33333 5C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V18.3333C5 19.2174 5.35119 20.0652 5.97631 20.6904C6.60143 21.3155 7.44928 21.6667 8.33333 21.6667C8.77536 21.6667 9.19928 21.8423 9.51184 22.1548C9.8244 22.4674 10 22.8913 10 23.3333V25C10 25.8841 9.64881 26.7319 9.02369 27.357C8.39857 27.9821 7.55072 28.3333 6.66667 28.3333C6.22464 28.3333 5.80072 28.5089 5.48816 28.8215C5.17559 29.134 5 29.558 5 30V33.3333C5 33.7754 5.17559 34.1993 5.48816 34.5118C5.80072 34.8244 6.22464 35 6.66667 35C9.31883 35 11.8624 33.9464 13.7377 32.0711C15.6131 30.1957 16.6667 27.6522 16.6667 25V8.33333C16.6667 7.44928 16.3155 6.60143 15.6904 5.97631C15.0652 5.35119 14.2174 5 13.3333 5H8.33333Z"
                      stroke="#FFD6A7"
                      stroke-width="3.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex mb-4">
                  <span className="text-orange-500 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-700 mb-8">
                  "From electronics to fashion, this is my go-to store for
                  everything. Love the seamless shopping experience!"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150?u=emma"
                  alt="Emma Rodriguez"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-500">Fashion Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}

    <section className="py-2 px-2 xsm:px-3 xs:px-4 sm:px-6 md:px-4 bs:px-3 lg:px-2">
        <div className="container-custom">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.477 12.8901L16.992 21.4161C17.009 21.5165 16.9949 21.6197 16.9516 21.7119C16.9084 21.8041 16.838 21.8808 16.7499 21.9319C16.6619 21.983 16.5603 22.006 16.4588 21.9978C16.3573 21.9897 16.2607 21.9507 16.182 21.8861L12.602 19.1991C12.4292 19.07 12.2192 19.0003 12.0035 19.0003C11.7878 19.0003 11.5778 19.07 11.405 19.1991L7.819 21.8851C7.74032 21.9496 7.64386 21.9885 7.54249 21.9967C7.44112 22.0049 7.33967 21.982 7.25166 21.931C7.16365 21.88 7.09327 21.8035 7.04991 21.7115C7.00656 21.6195 6.99228 21.5165 7.009 21.4161L8.523 12.8901"
                  stroke="#FF6900"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z"
                  stroke="#FF6900"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trusted Brands
              </h2>
            </div>
            <p className="text-gray-500 text-lg">
              We partner with the world's leading brands
            </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-3">
            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <span className="font-bold text-lg text-sky-500">TechVision</span>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <span className="font-bold text-lg text-fuchsia-500">StyleCraft</span>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <span className="font-bold text-lg text-orange-600">HomeEssence</span>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <span className="font-bold text-lg text-emerald-500">UrbanLux</span>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <span className="font-bold text-lg text-indigo-500">ModernSpace</span>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <span className="font-bold text-lg text-pink-600">ElegantLife</span>
            </div>
          </div>
        </div>
      </section> 

      {/* New section */}
       <section className="bg-gray-50 py-10 px-2 ">
        <div className="max-w-3xl m-auto rounded-[2.5rem] p-4 md:p-16 shadow-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-200 rounded-full mb-8">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6667 5.3335H5.33335C3.86059 5.3335 2.66669 6.5274 2.66669 8.00016V24.0002C2.66669 25.4729 3.86059 26.6668 5.33335 26.6668H26.6667C28.1394 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1394 5.3335 26.6667 5.3335Z"
                stroke="#FF6900"
                stroke-width="2.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.3334 9.3335L17.3734 16.9335C16.9617 17.1914 16.4858 17.3282 16 17.3282C15.5143 17.3282 15.0383 17.1914 14.6267 16.9335L2.66669 9.3335"
                stroke="#FF6900"
                stroke-width="2.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Get the latest updates on new products, exclusive deals, and special
            offers delivered straight to your inbox!
          </p>

          <div className="flex flex-col xs:flex-row   items-center justify-center gap-4 max-w-lg mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700"
            />
            <button className="w-full xs:w-auto flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors ">
              Subscribe
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.6907 14.4572C9.71603 14.5203 9.76006 14.5742 9.81688 14.6116C9.87371 14.6489 9.9406 14.668 10.0086 14.6663C10.0766 14.6646 10.1424 14.6421 10.1973 14.6018C10.2521 14.5616 10.2933 14.5055 10.3154 14.4412L14.6487 1.77454C14.67 1.71547 14.6741 1.65154 14.6604 1.59024C14.6468 1.52894 14.6159 1.4728 14.5715 1.42839C14.5271 1.38398 14.471 1.35314 14.4097 1.33947C14.3484 1.3258 14.2844 1.32987 14.2254 1.35121L1.5587 5.68454C1.49436 5.7066 1.43832 5.74782 1.39808 5.80266C1.35785 5.85749 1.33535 5.92332 1.33361 5.99131C1.33186 6.05931 1.35096 6.1262 1.38834 6.18303C1.42571 6.23985 1.47958 6.28388 1.5427 6.30921L6.82937 8.42921C6.99649 8.49612 7.14833 8.59618 7.27574 8.72336C7.40315 8.85054 7.50349 9.0022 7.5707 9.16921L9.6907 14.4572Z"
                  stroke="white"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5693 1.43115L7.276 8.72382"
                  stroke="white"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <p className="text-gray-400 text-sm">
            By subscribing, you agree to our{" "}
            <NavLink to="/" classNameName="underline">
              Privacy Policy
            </NavLink>{" "}
            and consent to receive updates.
          </p>
        </div>
      </section>
      <Footer />

    </>
  );
}

export default Home;
