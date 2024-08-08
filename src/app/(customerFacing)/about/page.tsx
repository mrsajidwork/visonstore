"use client";

import React from "react";
import Image from "next/image";
import ourStoryImage from "/public/image/about-01.webp";
import ourMissionImage from "/public/image/about-02.webp";

export default function About() {
  return (
    <>
      <section
        className="w-full bg-about_page_banner bg-no-repeat bg-cover
    bg-center px-4 py-24 mt-[65px]"
      >
        <h2 className="text-center text-white text-5xl font-bold font-display fade-in">
          About
        </h2>
      </section>

      <section className="about pt-20 pb-32">
        <div className="container mx-auto">
          <div className="about-block flex justify-between flex-wrap pb-36">
            <div
              className="content-block font-display w-full max-w-full lg:max-w-[900px] 
                pb-8  lg:pr-24 fade-left"
            >
              <h3 className="text-2xl font-bold text-grey pb-4">Our Story</h3>
              <p className="text-sm text-light-grey pb-4 font-normal leading-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit.
              </p>
              <p className="text-sm text-light-grey pb-4 leading-sm">
                Donec gravida lorem elit, quis condimentum ex semper sit amet.
                Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
                fringilla turpis in vehicula vehicula. Pellentesque congue ac
                orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a
                arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque,
                magna vel dictum rutrum, neque justo eleifend elit, vel
                tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                ligula.
              </p>
              <p className="text-sm text-light-grey leading-sm">
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
            <div className="image-block w-full max-w-full lg:max-w-[430px] fade-left">
              <div className="how-bor1 relative">
                <div className="hov-img0 block overflow-hidden">
                  {/* <img className="transform transition-transform duration-500 hover:scale-110
                            cursor-pointer" src="../src/image/about-01.webp" alt=""> */}
                  <Image
                    src={ourStoryImage}
                    alt="Our Story"
                    className="transform transition-transform duration-500 hover:scale-110
                            cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about-block flex justify-between flex-wrap">
            <div className="image-block w-full max-w-full lg:max-w-[430px] fade-left pb-12">
              <div className="how-bor2 relative">
                <div className="hov-img0 block overflow-hidden">
                  {/* <img className="transform transition-transform duration-500 hover:scale-110
                            cursor-pointer" src="../src/image/about-02.webp" alt=""> */}
                  <Image
                    src={ourMissionImage}
                    alt="Our Mission"
                    className="transform transition-transform duration-500 hover:scale-110
                            cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div
              className="content-block font-display w-full max-w-full lg:max-w-[900px]
                lg:pl-24 fade-left"
            >
              <h3 className="text-2xl font-bold text-grey pb-4">Our Mission</h3>
              <p className="text-sm text-light-grey pb-4 font-normal leading-sm">
                Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum
                rhoncus dignissim risus, sed consectetur erat. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nullam maximus mauris sit amet odio convallis,
                in pharetra magna gravida. Praesent sed nunc fermentum mi
                molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit
                egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor,
                consequat odio in, porttitor ante. Ut mauris ligula, volutpat in
                sodales in, porta non odio. Pellentesque tempor urna vitae mi
                vestibulum, nec venenatis nulla lobortis. Proin at gravida ante.
                Mauris auctor purus at lacus maximus euismod. Pellentesque
                vulputate massa ut nisl hendrerit, eget elementum libero
                iaculis.
              </p>
              <blockquote className="pl-8 border-l-4 border-lavender">
                <p className="text-sm text-light-grey leading-sm pb-3">
                  Creativity is just connecting things. When you ask creative
                  people how they did something, they feel a little guilty
                  because they didn&apos;t really do it, they just saw
                  something. It seemed obvious to them after a while.
                </p>
                <span className="text-xs text-dark-gray">
                  - Steve Job&apos;s
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
