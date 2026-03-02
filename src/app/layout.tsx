import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | KNIGHTS by Yarns Lanka",
    default: "KNIGHTS | Premium Bedding by Yarns Lanka",
  },
  description: "Yarns Lanka designs and manufactures the refined bed linen collection under our flagship brand KNIGHTS. Authentic Egyptian Cotton.",
  keywords: ["luxury bedding", "Egyptian cotton", "sheets", "duvet covers", "Yarns Lanka", "KNIGHTS bedding", "Sri Lanka textiles"],
  authors: [{ name: "Yarns Lanka Private Limited" }],
  creator: "Yarns Lanka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yarnslanka.com",
    title: "KNIGHTS | Premium Bedding by Yarns Lanka",
    description: "Discover the most sought after Egyptian Cotton Bed Linen by Yarns Lanka.",
    siteName: "KNIGHTS by Yarns Lanka",
  },
  twitter: {
    card: "summary_large_image",
    title: "KNIGHTS | Premium Bedding by Yarns Lanka",
    description: "Discover the most sought after Egyptian Cotton Bed Linen.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} dark`}>
      <body className="bg-brand-black text-brand-cream min-h-screen flex flex-col antialiased selection:bg-brand-gold selection:text-brand-black">
        {children}
      </body>
    </html>
  );
}
