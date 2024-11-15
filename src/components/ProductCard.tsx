"use client";

import React, { useState } from "react";
import Image from "next/image";
import heartIconOne from "/public/image/icon-heart-01.webp";
import heartIconTwo from "/public/image/icon-heart-02.webp";
import ProductQuickView from "./ProductQuickView";

type ProductCardProps = {
  id: string;
  name: string;
  priceInCents: number;
  imagePath: string;
  description: string;
};

export const ProductCard = ({
  id,
  name,
  priceInCents,
  imagePath,
  description,
}: ProductCardProps) => {
  const myProps = {
    id,
    name,
    priceInCents,
    imagePath,
    description,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card-block cursor-pointer font-display fade-in" key={id} onClick={openModal}>
        <div className="lg:h-[395px] h-auto overflow-hidden relative">
          <Image
            src={imagePath}
            alt="Product 2"
            width={500}
            height={500}
            className="mb-4 w-full h-full
                            object-cover transform transition-transform duration-500 hover:scale-110"
          />
          <div className="btn absolute bottom-[23px] left-2/4 -translate-x-2/4">
            <button
              className=" flex items-center justify-center bg-white text-grey text-sm
                                    rounded-full py-2 px-7 opacity-0 transition-opacity duration-300 hov-btn1"
            >
              Quick View
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-block">
            <p className="text-product-gray text-sm pb-2">{name}</p>
            <p className="text-dark-gray text-sm">${priceInCents}</p>
          </div>
          <div className="heart-block relative">
            <Image src={heartIconOne} alt="" fill={true} />
            <Image
              src={heartIconTwo}
              alt=""
              className="opacity-0 hover-img absolute top-0"
              fill={true}
            />
          </div>
        </div>
      </div>
      <ProductQuickView
        product={{
          id: "",
          name: "",
          priceInCents: 0,
          imagePath: "",
          description: "",
        }}
        modalStatus={isModalOpen}
        onClose={closeModal}
        {...myProps}
      />
    </>
  );
};
