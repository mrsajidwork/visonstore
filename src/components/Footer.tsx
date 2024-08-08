import React from "react";
import facebookIcon from "/public/image/facebook.png";
import instagramIcon from "/public/image/instagram.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-brown pb-12 pt-20">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-display">
                <div className="footer-navigation fade-in">
                    <h4 className="uppercase text-sm pb-8 font-bold text-white">Categories</h4>
                    <ul>
                        <li className="pb-2.5">
                            <a href="#" className="text-gray-17 text-sm">Women</a>
                        </li>
                        <li className="pb-2.5">
                            <a href="#" className="text-gray-17 text-sm">Men</a>
                        </li>
                        <li className="pb-2.5">
                            <a href="#" className="text-gray-17 text-sm">Shoes</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-17 text-sm">Watches</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-navigation fade-left">
                    <h4 className="uppercase text-sm pb-8 font-bold text-white">Help</h4>
                    <ul>
                        <li className="pb-2.5">
                            <a href="#" className="text-gray-17 text-sm">Track Order</a>
                        </li>
                        <li className="pb-2.5">
                            <a href="#" className="text-gray-17 text-sm">Returns</a>
                        </li>
                        <li className="pb-2.5">
                            <a href="#" className="text-gray-17 text-sm">Shipping</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-17 text-sm">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="get-in-touch fade-in">
                    <h4 className="uppercase text-sm pb-8 font-bold text-white">Get In Touch</h4>
                    <p className="text-gray-17 text-sm">
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us
                        on (+1) 96 716 6879
                    </p>
                    <ul className="social-links flex pt-7">
                        <li className="mr-4">
                            <a href="#">
                                <Image
                                  src={facebookIcon}
                                  alt="facebook"
                                  width={20}
                                  height={20}
                                />
                              </a>
                        </li>
                        <li>
                            <a href="#">
                                <Image
                                  src={instagramIcon}
                                  alt="instagram"
                                  width={20}
                                  height={20}
                                />
                              </a>
                        </li>
                    </ul>
                </div>
                {/* <div className="news-letter font-display fade-left">
                    <h4 className="uppercase text-sm pb-8 font-bold text-white">Newsletter</h4>
                    <form>
                        <div className="w-full">
                            <input className="input1 bg-transparent w-full border-b-2 text-gray-17 text-sm pb-1
                            outline-none" type="text" name="email" placeholder="email@example.com" />
                        </div>
                        <div className="mt-8">
                            <button className="bg-indigo text-white rounded-full px-12 py-3 text-sm uppercase hov-btn2">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    </footer>

      <div className="copy-right bg-brown text-center py-8 fade-in">
        <p className="text-gray-17 text-sm font-display">
          Copyright © 2024 All rights reserved | This template is made by{" "}
          <a href="https://maltavisions.com/">Maltavisions</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
