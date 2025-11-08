import React from "react";

export default function Navbar() {
  const links = ["Home", "About", "Events", "Gallery", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md p-4 flex justify-center space-x-8 text-gray-300">
      {links.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-white transition-colors duration-300"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}