"use client";

import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar for larger screens */}
      <div
        className={`fixed inset-0 md:w-64 w-48 bg-indigo-700 text-white transition-transform duration-300 lg:translate-x-0 z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="text-2xl font-bold mb-6 border-b border-gray-400 pb-2">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-4xl text-white">
                Learnify
              </Link>
              <button
                className="block lg:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-4">
            <Link
              href="/dashboard/overview"
              className="flex items-center text-white hover:bg-indigo-800 p-2 rounded transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 2.828a4 4 0 015.656 5.656l-10.6 10.6a2 2 0 01-.659.394L4 18.104a1 1 0 01-.463-.337l-1.388-1.388a1 1 0 01-.337-.463l2.329-4.184a2 2 0 01.394-.659l10.6-10.6a4 4 0 010 5.656z"
                />
              </svg>
              <span className="ml-4">New Chat</span>
            </Link>
            <Link
              href={'/history'}
              className="flex items-center text-white hover:bg-indigo-800 p-2 rounded transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-4">History</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Button (Hamburger) */}
      <div
        className="w-full lg:hidden top-20 fixed"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <div className="flex items-center justify-center py-2 text-white bg-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span>Open Dashboard</span></div>
      </div>
    </>
  );
};

export default Sidebar;
