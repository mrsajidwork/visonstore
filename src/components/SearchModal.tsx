"use client";

import React from "react";

export const SearchModal = () => {
  const toggleSearchModal = () => {
    const modal = document.getElementById("modal")!;
    modal.classList.toggle("hidden");
  };

  return (
    <div
      id="modal"
      className="search-modal fixed inset-0 z-50 bg-light-white flex
    items-center justify-center hidden"
    >
      <div className="bg-white w-full max-w-4xl relative">
        <button
          className="absolute -top-16 right-4 text-gray-600 hover:text-gray-900"
          onClick={toggleSearchModal}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <input
          type="text"
          className="w-full py-5 px-6 rounded outline-none"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};
