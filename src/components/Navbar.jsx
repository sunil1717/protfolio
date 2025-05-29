import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
   if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold text-[#b6ff00]">$..</h1>

        <div className="hidden md:flex space-x-6">
          {['home', 'about', 'project'].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="capitalize hover:text-[#b6ff00] transition font-medium"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-center">
          {['home', 'about', 'project'].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
            className="capitalize hover:text-[#b6ff00] transition font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
