"use client";

import { useEffect, useState } from "react";
import "@/css/satoshi.css";
import "@/css/style.css";
import Loader from "@/components/Loader";

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <div className="dark:bg-boxdark-2 dark:text-bodydark h-lvh">
        {loading ? <Loader /> : children}
      </div>
    </>
  );
}
