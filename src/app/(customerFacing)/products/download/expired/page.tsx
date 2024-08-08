import Link from "next/link";

export default function Expired() {
  return (
    <>
      <section className="container mx-auto px-4 flex flex-col items-center justify-center p-20 mt-20">
        <h1 className="text-4xl font-bold mb-4">Download Link Expired</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/orders">Get New Link</Link>
        </button>
      </section>
    </>
  );
}