
import "@/css/satoshi.css";
import "@/css/style.css";
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <div className="dark:bg-boxdark-2 dark:text-bodydark h-lvh">
        {children}
      </div>
    </>
  );
}
