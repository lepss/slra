import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sur les Routes d'Arabie",
  description: "Sur les Routes d'Arabie",
  metadataBase: new URL("https://www.surlesroutesdarabie.com/"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `Sur les Routes d'Arabie`,
    description: "Sur les Routes d'Arabie",
    images: [
      {
        url: "/img/logo-titre.jpg",
        width: 800,
        height: 600,
        alt: "Sur les Routes d'Arabie image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-w-[300px]`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
