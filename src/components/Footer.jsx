import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaSignOutAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="hidden lg:block bg-white border-t shadow z-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-semibold text-purple-700 mb-2">EventHub</h2>
          <p className="text-gray-500">
            The all-in-one event management portal for students to discover,
            register, and participate in university events.
          </p>
          <div className="flex gap-3 mt-4 text-gray-500">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Events Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Events</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Upcoming Events</a></li>
            <li><a href="#" className="hover:text-blue-600">Past Events</a></li>
            <li><a href="#" className="hover:text-blue-600">Academic Events</a></li>
            <li><a href="#" className="hover:text-blue-600">Internship Opportunities</a></li>
            <li><a href="#" className="hover:text-blue-600">Placement Events</a></li>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Account</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">My Profile</a></li>
            <li><a href="#" className="hover:text-blue-600">My Registrations</a></li>
            <li><a href="#" className="hover:text-blue-600">Notification Settings</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Settings</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Support</a></li>
            <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 py-2 border-t">
        © 2025 EventHub. All rights reserved. <br />
        Designed and developed for the university community. Version 1.0.0
      </div>
    </footer>
  );
}
