"use client";

import { userOrderExists } from "@/app/(customerFacing)/actions/orders";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { error } from "console";
import Image from "next/image";
import { FormEvent, useState } from "react";

type CheckoutFormProps = {
  product: {
    id: string;
    imagePath: string;
    name: string;
    priceInCents: number;
    description: string;
  };
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export function CheckoutForm({ product, clientSecret }: CheckoutFormProps) {
  return (
    <>
      <section className="container mx-auto px-4 flex flex-col items-center justify-center p-20 mt-20">
        <div className="flex flex-wrap justify-between pb-36">
          <div className="w-full md:w-1/2">
            <Image
              src={product.imagePath}
              alt={product.name}
              className="max-w-full h-auto"
              width={400}
              height={400}
            />
          </div>
          <div className="px-5 py-5 w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
              <p className="text-lg mb-4">${product.priceInCents}</p>
              <p className="text-lg mb-4">{product.description}</p>
            </div>
            <div>
              <Elements options={{ clientSecret }} stripe={stripePromise}>
                <Form
                  priceInCents={product.priceInCents}
                  productId={product.id}
                />
              </Elements>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Form({
  priceInCents,
  productId,
}: {
  priceInCents: number;
  productId: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (stripe == null || elements == null || email == null) {
      return;
    }

    setIsLoading(true);

    const orderExits = await userOrderExists(email, productId);

    if (orderExits) {
      setErrorMessage("You have already purchased this product");
      setIsLoading(false);
      return;
    }

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <LinkAuthenticationElement onChange={(e) => setEmail(e.value.email)} />
      <button
        className="my-5 rounded-full inline-block bg-indigo px-11 py-3.5 text-sm font-medium text-white uppercase hov-btn1"
        disabled={stripe == null || elements == null || isLoading}
      >
        {isLoading ? "Buying..." : `Buy Now for $${priceInCents}`}
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
}
