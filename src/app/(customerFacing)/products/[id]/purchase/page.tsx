import db from "@/db/db";
import Stripe from "stripe";
import { CheckoutForm } from "./_components/CheckoutForm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function PurchasePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });
  if (product == null) {
    throw Error("Product not found");
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: product.priceInCents * 100,
    currency: "USD",
    metadata: { productId: product.id },
  });

  if (paymentIntent.client_secret == null) {
    throw Error("Stripe failed to create payment intent");
  }

  return (
    <CheckoutForm
      product={product}
      clientSecret={paymentIntent.client_secret}
    />
  );
}
