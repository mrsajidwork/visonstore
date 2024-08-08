import HeroSection from "@/components/HeroSection";
import HomeCategories from "@/components/HomeCategories";
import Shop from "./shop/page";
import db from "@/db/db";
import { cache } from "@/lib/cache";
import "../globals.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeCategories />
      <Shop />
    </>
  );
}

export const getMostPopularProducts = cache(
  () => {
    return db.product.findMany({
      where: { isAvailableForPurchase: true },
      orderBy: { orders: { _count: "desc" } },
      take: 6,
    });
  },
  ["/", "getMostPopularProducts"],
  { revalidate: 60 * 60 * 24 }
);

const getNewestProducts = cache(
  () => {
    return db.product.findMany({
      where: { isAvailableForPurchase: true },
      orderBy: { createdAt: "desc" },
      take: 6,
    });
  },
  ["/", "getNewestProducts"],
  { revalidate: 60 * 60 * 24 }
);
