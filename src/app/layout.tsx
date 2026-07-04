import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vega Jewelry · Bloomfield, NJ",
  description:
    "Vega Jewelry — the neighborhood jeweler at 572 Bloomfield Ave, Bloomfield, NJ. Fine jewelry, gold, engagement, watches, repairs, and custom pieces. Open Mon–Sat 10–7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
