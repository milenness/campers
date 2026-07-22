import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers"

import Header from "@/components/Header"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "TravelTrucks | Your Dream Campervan Rental",
    template: "%s | TravelTrucks",
  },
  description:
    "Discover the campervan of your dreams with TravelTrucks. Browse our catalog for reliable, comfortable, and stylish campervans perfect for your next road trip adventure.",
  keywords: [
    "campervan rental",
    "travel trucks",
    "road trip",
    "motorhome hire",
    "camper catalog",
    "travel Ukraine",
  ],
  authors: [{ name: "Milena Karpenko" }],
  openGraph: {
    title: "TravelTrucks | Rent Your Perfect Campervan",
    description:
      "Explore our wide range of campervans and start your journey today. High-quality vehicles for unforgettable experiences.",
    url: "https://your-site-url.com",
    siteName: "TravelTrucks",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Providers>
          <Header />
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
};

