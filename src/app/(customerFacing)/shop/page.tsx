import React from 'react'
import { ProductCard } from '@/components/ProductCard'
import { getMostPopularProducts } from '../page'


const Shop = () => {

  return (
    <div className="products-tabs pt-32 pb-24">
        <div className="container mx-auto">
            <div className="w-full">
                <h3 className="uppercase text-4xl font-display text-brown font-bold mb-4 fade-left">Product Overview
                </h3>
                <ul className="flex font-display mb-12 fade-left" id="tabs">
                    <li className="mr-8 tab-li">
                        <a className="text-grey text-sm font-normal inline-block active" href="#tab1">All Products</a>
                    </li>
                    {/* <li className="mr-8 tab-li">
                        <a className="text-light-grey text-sm font-normal inline-block" href="#tab2">Women</a>
                    </li>
                    <li className="mr-8 tab-li">
                        <a className="text-light-grey text-sm font-normal inline-block" href="#tab3">Men</a>
                    </li> */}
                </ul>

                <div id="tab1" className="tab-content active-tab grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        async function() {
                            const products = await getMostPopularProducts();
                            return products.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ));
                        }()
                    }
                </div>

            </div>
            {/* <div className="load-more text-center mt-20 fade-in">
                <a href="#" className="hov-btn1 bg-lavender text-brown uppercase text-sm font-medium
                font-display py-3 px-11 inline-block rounded-full">Load More</a>
            </div> */}
        </div>
    </div>
  )
}

export default Shop