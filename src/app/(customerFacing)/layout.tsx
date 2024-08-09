"use client";

import "../globals.css";

import ClientFade from "../../components/ClientFade";
import { SearchModal } from "../../components/SearchModal";
import { CartModal } from "../../components/CartModal";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <ClientFade />
      <NavBar />
      {loading ? <Loader /> : children}
      <Footer />
      <SearchModal />
      <CartModal />
    </>
  );
}
