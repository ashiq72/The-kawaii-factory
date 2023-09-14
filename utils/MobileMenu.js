"use client";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
      >
        Menu
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="bg-gray-100 p-4 w-64 rounded-lg shadow-lg">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
