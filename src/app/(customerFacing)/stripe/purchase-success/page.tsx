import db from "@/db/db";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );

  if (paymentIntent.metadata.productId == null) {
    throw Error("Product not found");
  }

  const product = await db.product.findUnique({
    where: { id: paymentIntent.metadata.productId },
  });

  if (product == null) {
    throw Error("Product not found");
  }

  const isSuccess = paymentIntent.status === "succeeded";

  return (
    <section className="container mx-auto px-4 flex flex-col items-center justify-center p-20 mt-20">
      <h1 className="text-4xl font-bold mb-4">
        {isSuccess ? "Success!" : "Failed"}
      </h1>
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {isSuccess ? (
                <a
                  href={`/products/download/${await createDownloadVerification(
                    product.id
                  )}`}
                >Download</a>
              ) : (
                <Link href={`/products/${product.id}/purchase`}>Try again</Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

async function createDownloadVerification(productId: string) {
  return (
    await db.downloadVerification.create({
      data: {
        productId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    })
  ).id;
}
