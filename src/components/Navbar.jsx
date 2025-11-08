import React from "react";

export default function Navbar() {
  const links = ["Home", "About", "Events", "Gallery", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md p-4 flex justify-between items-center text-gray-300 px-8">
      {/* 1. Logo / Brand Name */}
      <div className="text-2xl font-bold text-white">
        Astronomy Club
      </div>
      {/* 2. Navigation Links */}
      <div className ="flex text-xl space-x-10 text-white">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}