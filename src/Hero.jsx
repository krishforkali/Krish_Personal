import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <img
        src="/herosectiondesktop.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <img
        src="/herosectionphone.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/10"></div> {/* Slight overlay for text readability if needed */}

      {/* Top Left Logo */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <h1 className="text-white font-black text-5xl md:text-7xl tracking-tighter drop-shadow-md">
          KR
        </h1>
      </div>

      {/* Top Right Menu */}
      <div className="absolute top-8 right-8 md:top-12 md:right-12 cursor-pointer z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-md hover:scale-110 transition-transform"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>

      {/* Bottom Quote text */}
      <div className="absolute bottom-32 left-8 right-8 md:bottom-24 md:left-12 md:w-2/3 lg:w-1/2">
        <h2 className="text-white font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.9] drop-shadow-lg font-sans">
          “If anything happens,<br />
          <span className="text-white">I’m right behind you.</span>”
        </h2>
      </div>
    </section>
  );
}
