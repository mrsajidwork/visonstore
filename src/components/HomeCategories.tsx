import React from 'react'
import Image from 'next/image'
import bannerOne from '/public/image/banner-01.jpg.webp'
import bannerTwo from '/public/image/banner-02.jpg.webp'
import bannerThree from '/public/image/banner-03.jpg.webp'


const HomeCategories = () => {
  return (
    <div className="card-section pt-24 pb-16">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group border relative font-display fade-in">
                    {/* <img className="w-full" src="../src/image/banner-01.jpg.webp"> */}
                    <Image src={bannerOne}
                        alt="banner"
                        />
                    {/* <div
                        className="card-block absolute top-0 left-0 py-9 px-10 w-full h-full flex justify-between flex-col">
                        <div>
                            <h2 className="text-3xl font-semibold animate-shake pb-2">Women</h2>
                            <p className="text-sm animate-shake">Spring 2018</p>
                        </div>
                        <div className="btn ">
                            <button className="text-white opacity-0 pb-1 text-sm uppercase
                                group-hover:opacity-100 transition-opacity animate-fade-up">
                                Shop Now
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="group border relative font-display fade-left">
                    {/* <img className="w-full" src="../src/image/banner-02.jpg.webp"> */}
                    <Image src={bannerTwo}
                        alt="banner"
                        />
                    {/* <div
                        className="card-block absolute top-0 left-0 py-9 px-10 w-full h-full flex justify-between flex-col">
                        <div>
                            <h2 className="text-3xl font-semibold animate-shake pb-2">Men</h2>
                            <p className="text-sm animate-shake">Spring 2018</p>
                        </div>
                        <div className="btn ">
                            <button className="text-white opacity-0 pb-1 text-sm uppercase
                                group-hover:opacity-100 transition-opacity animate-fade-up">
                                Shop Now
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="group border relative font-display fade-left">
                    {/* <img className="w-full" src="../src/image/banner-03.jpg.webp"> */}
                    <Image src={bannerThree}
                        alt="banner"
                        />
                    {/* <div
                        className="card-block absolute top-0 left-0 py-9 px-10 w-full h-full flex justify-between flex-col">
                        <div>
                            <h2 className="text-3xl font-semibold animate-shake pb-2">Accessories</h2>
                            <p className="text-sm animate-shake">New Trend</p>
                        </div>
                        <div className="btn ">
                            <button className="text-white opacity-0 pb-1 text-sm uppercase
                                group-hover:opacity-100 transition-opacity animate-fade-up">
                                Shop Now
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCategories