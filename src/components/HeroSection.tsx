import React from "react";
import Image from "next/image";
import rightArrow from "/public/image/right-arrow.png";

const HeroSection = () => {
return (
    <div className="relative w-full overflow-hidden font-display">
         <div id="slider" className="flex transition-transform duration-500 ease-in-out h-screen">
            <div className="w-full flex-shrink-0 bg-hero_banner_one bg-no-repeat bg-cover
            bg-center fade-in">
                <div className="container mx-auto flex flex-col justify-center h-full">
                    <h1 className="text-3xl tracking-tight fade-left">
                        New Season</h1>
                    <p className="mt-4 text-6xl font-playfair font-bold text-grey fade-left">
                        New arrivals</p>
                    <div className="mt-[43px] inline-block fade-left">
                        <a href="#" className="rounded-full inline-block bg-indigo px-11 py-3.5 text-sm font-medium
                            text-white uppercase hov-btn1">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full flex-shrink-0 bg-hero_banner_two bg-no-repeat bg-cover
            bg-center fade-in">
                <div className="container mx-auto flex flex-col justify-center h-full">
                    <h1 className="text-3xl tracking-tight fade-left">
                        New Season</h1>
                    <p className="mt-4 text-6xl font-playfair font-bold text-grey fade-left">
                        New arrivals</p>
                    <div className="mt-[43px] inline-block fade-left">
                        <a href="#" className="rounded-full inline-block bg-indigo px-11 py-3.5 text-sm font-medium
                            text-white uppercase hov-btn1">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full flex-shrink-0 bg-hero_banner_three bg-no-repeat bg-cover
            bg-center fade-in">
                <div className="container mx-auto flex flex-col justify-center h-full">
                    <h1 className="text-3xl tracking-tight fade-left">
                        New Season</h1>
                    <p className="mt-4 text-6xl font-playfair font-bold text-grey fade-left">
                        New arrivals</p>
                    <div className="mt-[43px] inline-block fade-left">
                        <a href="#" className="rounded-full inline-block bg-indigo px-11 py-3.5 text-sm font-medium
                            text-white uppercase hov-btn1">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <button id="prev" className="absolute left-0 top-1/2 ml-0 md:ml-14 rotate-180">
            <Image
                src={rightArrow}
                alt="Picture of the author"
                priority
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
        </button>
        <button id="next" className="absolute right-0 top-1/2 mr-0 md:mr-14">
            <Image
                src={rightArrow}
                alt="Picture of the author"
                priority
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
        </button>
    </div>
);
};

export default HeroSection;
