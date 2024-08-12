"use client";

import React from "react";
import Image from "next/image";
import siteLogo from "/public/image/site-logo.png";
import searchIcon from "/public/image/search-icon.png";
import cartIcon from "/public/image/cart-icon.png";
import heartIcon from "/public/image/heart-icon.png";
import closeIcon from "/public/image/close.png";
import Link from "next/link";
import hamburgeIcon from "/public/image/hamburger.png";

const NavBar = () => {
  const toggleSearchModal = () => {
    const modal = document.getElementById("modal")!;
    modal.classList.toggle("hidden");
  };

  const toggleCartModal = () => {
    const modal = document.getElementById("cart")!;
    modal.classList.toggle("hidden");
    modal.classList.toggle("open");
  };

  //active-menu class
  const activeMenu = (e: any) => {
    const menu = document.querySelectorAll(".main-menu li");
    menu.forEach((item) => item.classList.remove("active-menu"));
    e.target.parentElement.classList.add("active-menu");
  };

  const mobileMenuOpen = () => {
    const menu = document.getElementById("mobile-menu")!;
    menu.classList.toggle("menu-hidden");
  };

  const mobileMenuClose = () => {
    const menu = document.getElementById("mobile-menu")!;
    menu.classList.toggle("menu-hidden");
  };

  return (
    <>
      <header className="site-header py-5 fixed top-0 z-20 w-full font-display fade-in">
        <div className="container mx-auto flex justify-between">
          <div className="flex">
            <div className="site-logo mr-[55px] w-36 flex items-center">
              <NavLink href="/">
                <Image
                  src={siteLogo}
                  alt="Site Logo"
                  priority
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </NavLink>
            </div>
            <ul className="main-menu md:flex hidden">
              <li className="mr-[28px] active-menu" onClick={activeMenu}>
                <NavLink href="/">Home</NavLink>
              </li>
              <li className="mr-[28px]" onClick={activeMenu}>
                <NavLink href="/shop">Shop</NavLink>
              </li>
              <li className="mr-[28px]" onClick={activeMenu}>
                <NavLink href="/about">About</NavLink>
              </li>
              <li className="mr-[28px]" onClick={activeMenu}>
                <NavLink href="/contact-us">Contact</NavLink>
              </li>
            </ul>
          </div>
          {/* <div className="wrap-icon-header md:flex md:w-96 justify-start md:justify-end hidden">
            <div
              className="icon-header-item mr-4 md:mr-[33px] cursor-pointer"
              onClick={toggleSearchModal}
            >
              <Image
                src={searchIcon}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <div
              id="openCartButton"
              className="icon-header-item mr-4 md:mr-[33px] relative cursor-pointer"
              data-notify="2"
              onClick={toggleCartModal}
            >
              <Image
                src={cartIcon}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <span>2</span>
            </div>
            <a
              href="#"
              className="dis-block icon-header-item relative"
              data-notify="0"
            >
              <Image
                src={heartIcon}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <span>0</span>
            </a>
          </div> */}

          <div className="md:hidden flex">
            <div
              className="icon-header-item mr-6 md:mr-[33px]"
              onClick={toggleSearchModal}
            >
              {/* <img className="cursor-pointer" src="../src/image/search-icon.png" alt=""> */}
              <Image src={searchIcon} alt="Search Icon" />
            </div>
            <button
              id="menu-button"
              className="focus:outline-none"
              onClick={mobileMenuOpen}
            >
              {/* <img src="../src/image/hamburger.png" alt=""> */}
              <Image src={hamburgeIcon} alt="Hmburger Icon" />
            </button>
          </div>

          <div
            id="mobile-menu"
            className="menu-hidden fixed inset-0 h-screen py-5 px-8 bg-white
                z-50 md:hidden overflow-y-auto"
          >
            <button
              id="close-button"
              className="focus:outline-none flex justify-end w-full"
              onClick={mobileMenuClose}
            >
              {/* <img src="../src/image/close.png" alt=""> */}
              <Image src={closeIcon} alt="Picture of the author" />
            </button>
            <ul className="mt-8 main-menu">
              <li className="active-menu mb-[14px]" onClick={activeMenu}>
                <NavLink href="/">Home</NavLink>
              </li>
              <li className="mb-[14px]" onClick={activeMenu}>
                <NavLink href="/shop">Shop</NavLink>
              </li>
              <li className="mb-[14px]" onClick={activeMenu}>
                <NavLink href="/about">About</NavLink>
              </li>
              <li className="mb-[14px]" onClick={activeMenu}>
                <NavLink href="/contact-us">Contact</NavLink>
              </li>
            </ul>
            <div className="wrap-icon-header md:hidden">
              <div
                className="icon-header-item mb-[17px] relative w-max"
                data-notify="2"
              >
                {/* <img className="cursor-pointer" src="../src/image/cart-icon.png" alt=""> */}
                <Image src={cartIcon} alt="Picture of the author" />
                <span>2</span>
              </div>
              <a
                href="#"
                className="icon-header-item relative w-max inline-block"
                data-notify="0"
              >
                {/* <img src="../src/image/heart-icon.png" alt=""> */}
                <Image src={heartIcon} alt="Picture of the author" />
                <span>0</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

export function NavLink(props: any) {
  return (
    <Link {...props} className={`text-grey ${props.className?? ''}`}>
      {props.children}
    </Link>
  );
}
