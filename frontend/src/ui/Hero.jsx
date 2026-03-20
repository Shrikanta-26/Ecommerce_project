import React from "react";

function HeroSection() {
  return (
    <section className="relative border-b border-black/10 flex justify-center py-8 mb-4 bg-amber-50">
      <div className="grid lg:grid-cols-2 gap-8 items-center container-custom ">
        {/* LEFT CONTENT COLUMN */}
        <div className="flex justify-start flex-col space-y-8">
          {/* Badge */}
          <div className="flex  px-2.5 py-4 h-9 w-fit items-center shrink-0 gap-2 rounded-full border border-[#FFD6A8] bg-white shadow-sm">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62467 10.3333C6.56515 10.1026 6.44489 9.89207 6.27641 9.72359C6.10793 9.55511 5.89738 9.43485 5.66667 9.37533L1.57667 8.32067C1.50689 8.30086 1.44547 8.25884 1.40174 8.20096C1.35801 8.14309 1.33435 8.07254 1.33435 8C1.33435 7.92746 1.35801 7.85691 1.40174 7.79904C1.44547 7.74117 1.50689 7.69914 1.57667 7.67933L5.66667 6.624C5.8973 6.56454 6.1078 6.44438 6.27627 6.27603C6.44474 6.10767 6.56504 5.89726 6.62467 5.66667L7.67933 1.57667C7.69894 1.50661 7.74092 1.4449 7.79888 1.40093C7.85684 1.35697 7.92759 1.33317 8.00033 1.33317C8.07308 1.33317 8.14383 1.35697 8.20179 1.40093C8.25974 1.4449 8.30173 1.50661 8.32133 1.57667L9.37533 5.66667C9.43485 5.89738 9.55511 6.10793 9.72359 6.27641C9.89207 6.44489 10.1026 6.56515 10.3333 6.62467L14.4233 7.67867C14.4937 7.69807 14.5557 7.74001 14.5999 7.79805C14.6441 7.8561 14.668 7.92704 14.668 8C14.668 8.07296 14.6441 8.1439 14.5999 8.20195C14.5557 8.25999 14.4937 8.30193 14.4233 8.32133L10.3333 9.37533C10.1026 9.43485 9.89207 9.55511 9.72359 9.72359C9.55511 9.89207 9.43485 10.1026 9.37533 10.3333L8.32067 14.4233C8.30106 14.4934 8.25908 14.5551 8.20112 14.5991C8.14316 14.643 8.07241 14.6668 7.99967 14.6668C7.92692 14.6668 7.85617 14.643 7.79821 14.5991C7.74026 14.5551 7.69827 14.4934 7.67867 14.4233L6.62467 10.3333Z"
                  stroke="#FF6900"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3333 2V4.66667"
                  stroke="#FF6900"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6667 3.33334H12"
                  stroke="#FF6900"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.66666 11.3333V12.6667"
                  stroke="#FF6900"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33333 12H2"
                  stroke="#FF6900"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p className="text-[#364153] font-sans text-sm font-normal leading-5">
              Spring Collection 2026
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-tight lg:leading-[79.2px] tracking-tight lg:tracking-[-1.8px]">
            <p className="text-[#0A0A0A">Design Your</p>
            <p className="text-[#FF6900]">Dream Home</p>
          </h1>

          {/* Subtext */}
          <div className="flex flex-col gap-2">
            <p className="text-[#4A5565] sm:text-lg lg:text-[18px] font-normal leading-relaxed lg:leading-[29.25px]">
              Curated furniture that blends timeless elegance with modern
              comfort. Transform every corner into your sanctuary.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-5 ">
              <div className="flex cursor-pointer gap-4 justify-around items-center bg-[#FF6900] rounded-xl px-8 py-4 transition-all hover:bg-[#dd630c]">
                <button className=" text-white font-bold cursor-pointer ">
                  Explore Collection
                </button>
                <span className="">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33334 8H12.6667"
                      stroke="white"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 3.33334L12.6667 8.00001L8 12.6667"
                      stroke="white"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <button className="border cursor-pointer border-slate-300 hover:bg-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all ">
                View Lookbook
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="flex  items-start shrink-0 gap-16 pt-4 border-t border-slate-100">
            <div className="space-y-1">
              
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16667 18.1084C9.42003 18.2546 9.70744 18.3316 10 18.3316C10.2926 18.3316 10.58 18.2546 10.8333 18.1084L16.6667 14.775C16.9198 14.6289 17.13 14.4188 17.2763 14.1657C17.4225 13.9127 17.4997 13.6256 17.5 13.3334V6.66669C17.4997 6.37442 17.4225 6.08736 17.2763 5.83432C17.13 5.58128 16.9198 5.37116 16.6667 5.22502L10.8333 1.89169C10.58 1.74541 10.2926 1.6684 10 1.6684C9.70744 1.6684 9.42003 1.74541 9.16667 1.89169L3.33333 5.22502C3.08022 5.37116 2.86998 5.58128 2.72372 5.83432C2.57745 6.08736 2.5003 6.37442 2.5 6.66669V13.3334C2.5003 13.6256 2.57745 13.9127 2.72372 14.1657C2.86998 14.4188 3.08022 14.6289 3.33333 14.775L9.16667 18.1084Z"
                    stroke="#FF6900"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 18.3333V10"
                    stroke="#FF6900"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.74167 5.83331L10 9.99998L17.2583 5.83331"
                    stroke="#FF6900"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.25 3.55835L13.75 7.85002"
                    stroke="#FF6900"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
            
              <h4 className="font-bold text-[15px] ">Free Delivery</h4>
              <p className="text-xs text-slate-400">On orders $50+</p>
            </div>
            <div className="space-y-1">
            
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_1793)">
                    <path
                      d="M18.3334 5.83331L11.25 12.9166L7.08335 8.74998L1.66669 14.1666"
                      stroke="#FF6900"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.3333 5.83331H18.3333V10.8333"
                      stroke="#FF6900"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1793">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              
              <h4 className="font-bold text-[15px]">Premium Quality</h4>
              <p className="text-xs text-slate-400">Handpicked items</p>
            </div>
            <div className="space-y-1">
              
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.2808 12.9166C8.20641 12.6283 8.05609 12.3651 7.84548 12.1545C7.63488 11.9439 7.3717 11.7935 7.0833 11.7191L1.9708 10.4008C1.88358 10.3761 1.80681 10.3235 1.75215 10.2512C1.69748 10.1788 1.66791 10.0907 1.66791 9.99998C1.66791 9.90931 1.69748 9.82112 1.75215 9.74878C1.80681 9.67644 1.88358 9.62391 1.9708 9.59915L7.0833 8.27998C7.37159 8.20565 7.63471 8.05546 7.84531 7.84502C8.0559 7.63457 8.20627 7.37156 8.2808 7.08332L9.59914 1.97082C9.62364 1.88325 9.67612 1.8061 9.74857 1.75115C9.82102 1.69619 9.90945 1.66644 10.0004 1.66644C10.0913 1.66644 10.1798 1.69619 10.2522 1.75115C10.3246 1.8061 10.3771 1.88325 10.4016 1.97082L11.7191 7.08332C11.7935 7.37171 11.9439 7.6349 12.1545 7.8455C12.3651 8.0561 12.6282 8.20642 12.9166 8.28082L18.0291 9.59832C18.1171 9.62257 18.1946 9.67499 18.2498 9.74755C18.3051 9.8201 18.335 9.90878 18.335 9.99998C18.335 10.0912 18.3051 10.1799 18.2498 10.2524C18.1946 10.325 18.1171 10.3774 18.0291 10.4016L12.9166 11.7191C12.6282 11.7935 12.3651 11.9439 12.1545 12.1545C11.9439 12.3651 11.7935 12.6283 11.7191 12.9166L10.4008 18.0291C10.3763 18.1167 10.3238 18.1939 10.2514 18.2488C10.1789 18.3038 10.0905 18.3335 9.99955 18.3335C9.90862 18.3335 9.82018 18.3038 9.74774 18.2488C9.67529 18.1939 9.62281 18.1167 9.5983 18.0291L8.2808 12.9166Z"
                    stroke="#FF6900"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6667 2.5V5.83333"
                    stroke="#FF6900"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3333 4.16669H15"
                    stroke="#FF6900"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.33331 14.1667V15.8334"
                    stroke="#FF6900"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.16667 15H2.5"
                    stroke="#FF6900"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              <h4 className="font-bold text-[15px]">New Arrivals</h4>
              <p className="text-xs text-slate-400">Updated weekly</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE COLUMN */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070"
              alt="Luxury Living Room"
              className="w-full h-[490px] rounded-2xl"
            />

            {/* Orange Discount Card (Bottom Left) */}
            <div className="absolute bottom-4 left-4 bg-[#FF6B00] text-white p-7 rounded-[2rem] flex items-center gap-5 shadow-2xl">
              <div className="text-4xl font-extrabold border-r border-white/20 pr-5 leading-none">
                15%{" "}
                <span className="block text-xs font-medium mt-1 tracking-widest opacity-90 uppercase">
                  Off
                </span>
              </div>
              <div className="pr-2">
                <p className="font-bold text-lg leading-tight">First Order</p>
                <p className="text-xs font-medium opacity-80 mt-0.5">
                  Limited Time
                </p>
              </div>
            </div>

            {/* Featured Item Card (Top Right) */}
            <div className="absolute top-3 right-3 bg-white  p-4 rounded-2xl shadow-2xl w-48 transition-transform duration-500 hover:-translate-y-1">
              <div className="bg-stone-900 rounded-2xl aspect-square mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800"
                  alt="Sofa"
                  className="h-full opacity-80"
                />
              </div>
              <div className="px-1">
                <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold mb-1">
                  Featured Item
                </p>
                <h4 className="font-bold text-slate-800 text-lg">
                  Modern Sofa
                </h4>
                <p className="text-[#FF6B00] font-extrabold text-lg mt-0.5">
                  $899
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
