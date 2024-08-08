"use client";

import React from "react";
import cartIcon from "/public/image/item-cart-01.webp";
import Image from "next/image";

export const CartModal = () => {
const toggleCartModal = () => {
    const modal = document.getElementById("cart")!;
    modal.classList.toggle("hidden");
    modal.classList.toggle("open");
};

  return (
    <div
      id="cart"
      className="cart fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 p-4 hidden"
    >
      <button
        id="closeCartButton"
        className="absolute top-2 right-2 text-grey text-4xl"
        onClick={toggleCartModal}
      >
        &times;
      </button>
      <div className="mt-12 font-display flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl mb-4 ">Shopping Cart</h2>
          <p>Your cart is empty.</p>
          <ul className="mt-4">
            <li className="flex items-center py-4">
              <div className="w-20 h-20 overflow-hidden rounded-lg mr-4">
                {/* <img src="../src/image/item-cart-01.webp" alt="IMG"
                            className="object-cover w-full h-full relative"> */}
                <Image
                  src={cartIcon}
                  alt="IMG"
                  className="object-cover w-full h-full relative"
                />
              </div>
              <div className="flex flex-col justify-between">
                <a
                  href="#"
                  className="text-lg font-semibold mb-2 text-gray-900 hover:text-blue-600 transition duration-300"
                >
                  White Shirt Pleat
                </a>
                <span className="text-gray-600">1 x $19.00</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full mb-16">
          <div className="header-cart-total w-full py-4 text-lg text-brown font-normal border-t border-b">
            Total: $75.00
          </div>
          <div className="header-cart-buttons flex flex-wrap justify-center w-full mt-4">
            <a
              href="shoping-cart.html"
              className="text-white text-sm font-medium rounded-full
                bg-brown py-2.5 px-9 mr-2 hov-btn3"
            >
              View Cart
            </a>
            <a
              href="shoping-cart.html"
              className="text-white text-sm font-medium rounded-full
                bg-brown py-2.5 px-9 hov-btn3"
            >
              Check Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
