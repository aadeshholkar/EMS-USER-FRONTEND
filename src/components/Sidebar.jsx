import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // remove token
    navigate("/login"); // redirect to login page
  };

  return (
    <aside className="hidden lg:block lg:w-64 bg-white shadow-lg fixed inset-y-0 z-30">
      <div className="h-full flex flex-col justify-between">
        {/* Top Nav Items */}
        <div className="p-6">
          <div className="flex items-center justify-center mb-8">
            <img
              src="https://placehold.co/100x40?text=EventHub"
              alt="Logo"
              className="h-10"
            />
          </div>
          <nav className="space-y-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-medium text-sm ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              Dashboard
            </NavLink>
          </nav>
        </div>

        {/* Bottom Profile Section */}
        <div className="p-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src="https://placehold.co/40x40?text=Profile"
                alt="Profile"
                className="rounded-full w-10 h-10"
              />
              <div>
                <NavLink
                  to="/profile"
                  className="block text-sm font-medium text-gray-800 hover:underline"
                >
                  John Doe
                </NavLink>
                <p className="text-xs text-gray-500">CS-2023</p>
              </div>
            </div>
            {/* 🔐 Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center text-red-600 hover:text-red-800 text-sm"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 9a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z" />
                <path d="M13.293 7.293a1 1 0 011.414 1.414L13.414 10l1.293 1.293a1 1 0 01-1.414 1.414L11 10.414l-2.293 2.293a1 1 0 01-1.414-1.414L9.586 10 7.293 7.707a1 1 0 011.414-1.414L11 8.586l2.293-2.293z" />
              </svg>
              Logout
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center">© 2025 EventHub</p>
        </div>
      </div>
    </aside>
  );
}
