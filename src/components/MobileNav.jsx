// src/components/MobileNav.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden bg-white fixed top-0 left-0 right-0 z-40 shadow">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/dashboard">
          <img src="https://placehold.co/100x30?text=EventHub" alt="EventHub" className="h-8" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none focus:text-gray-800"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="px-4 pt-2 pb-4 border-t border-gray-200">
          <nav className="space-y-1">
            <NavLink
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-medium text-sm ${
                  isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/event-details"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-medium text-sm ${
                  isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Event Details
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}