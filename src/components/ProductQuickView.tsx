import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {AutoWidthLoader} from "./Loader";

export default function ProductQuickView({
  modalStatus = false,
  onClose,
  ...product
}: {
  modalStatus?: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    priceInCents: number;
    imagePath: string;
    description: string;
  };
  id: string;
  name: string;
  priceInCents: number;
  imagePath: string;
  description: string;
}) {
  const { id, name, priceInCents, imagePath, description } = product;

  const [modalStatusNew, setModalStatusNew] = useState(modalStatus);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setModalStatusNew(modalStatus);
  }, [modalStatus]);

  return (
    <div
      id="productModal"
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 overflow-auto ${
        modalStatusNew ? "" : "hidden"
      }`}
    >
      <div className="relative product-modal w-full max-w-7xl mx-auto my-8 bg-white rounded-lg flex flex-wrap lg:flex-nowrap p-8">
        <button
          id="closeModal"
          className="absolute top-2 right-2 p-2 text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="relative flex flex-wrap lg:flex-nowrap">
          <div className="w-full overflow-hidden p-0 lg:pr-4">
            <Image
              src={imagePath}
              alt={name}
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="pl-0 pt-8 lg:pl-4 lg:pt-0 w-full">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-lg text-gray-700 mb-4">${priceInCents / 100}</p>
            <p className="text-lg text-gray-700 mb-4">{description}</p>

            <div className="mt-4 h-24">
              {loading ? (
                <AutoWidthLoader height={6} width={6} />
              ) : (
                <Link href={`/products/${id}/purchase`}>
                  <button
                    id="addToCart"
                    className="rounded-full inline-block bg-indigo px-11 py-3.5 text-sm font-medium text-white uppercase hov-btn1"
                    onClick={() => setLoading(true)}
                  >
                    Purchase Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
