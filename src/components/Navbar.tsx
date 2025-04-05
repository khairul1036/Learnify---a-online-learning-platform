"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = true; // You can toggle this for testing purposes

  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    // Add event listener for detecting clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg p-4 fixed top-0 left-0 right-0 z-10">
      <div className="mx-2 flex justify-between items-center">
        {/* Mobile Menu Icon */}
        <div
          className="md:hidden flex items-center space-x-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <div className="text-3xl text-black">X</div>
          ) : (
            <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1 cursor-pointer">
              <div className="w-6 h-1 bg-black rounded"></div>
              <div className="w-6 h-1 bg-black rounded"></div>
              <div className="w-6 h-1 bg-black rounded"></div>
            </div>
          )}
        </div>
        {/* Logo */}
        <div className="flex items-center text-indigo-600 text-2xl font-bold">
          <Link href="/" className="text-indigo-600">
            Learnify
          </Link>
        </div>
        {/* Navbar links */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="text-gray-600 hover:text-indigo-600"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-indigo-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-indigo-600"
              >
                Contact
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
        {/* Profile */}
        <div>
          {user ? (
            <div
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-600 cursor-pointer"
              ref={profileRef}
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="w-full h-full object-cover"
                alt="Profile"
              />
            </div>
          ) : (
            <div>
              {/* Conditional Login/Registration Links */}
              <Link
                href="/login"
                className="inline-block px-6 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="hidden md:inline-block px-6 py-2 ml-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu - Slide In from Right */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white border-l-2 border-indigo-600 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* navlink  */}
        <div className="flex flex-col px-6 py-2">
          <Link
            href="/"
            className="text-gray-600 hover:text-indigo-600 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-gray-600 hover:text-indigo-600 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-indigo-600 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-indigo-600 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          {user && (
            <li>
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-indigo-600"
              >
                Dashboard
              </Link>
            </li>
          )}
        </div>
      </div>

      {/* Profile Info Dropdown */}
      {isProfileOpen && (
        <div className="absolute top-14 right-10 mt-2 w-48 bg-white border-2 border-indigo-600 rounded-lg shadow-lg p-4 z-50">
          <div className="text-center mb-4">
            <p className="font-semibold text-indigo-600">John Doe</p>
            <p className="text-sm text-gray-600">john.doe@example.com</p>
          </div>

          {/* Logout Button */}
          <button
            className="w-full py-2 mt-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            onClick={() => {
              // Handle logout action here
              console.log("Logged out!");
              setIsProfileOpen(false);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
