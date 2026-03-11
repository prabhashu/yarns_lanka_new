import type { Metadata } from "next";
import { Jost, Plus_Jakarta_Sans } from "next/font/google";
import Preloader from "@/components/ui/Preloader";
import "./globals.css";

const jost = Jost({ 
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Yarns Lanka",
    default: "Yarns Lanka | Premium Home Textiles & Bedding",
  },
  description: "Yarns Lanka designs and manufactures the refined bed linen collection under our flagship brand KNIGHTS. Authentic Egyptian Cotton.",
  keywords: ["luxury bedding", "Egyptian cotton", "sheets", "duvet covers", "Yarns Lanka", "KNIGHTS bedding", "Sri Lanka textiles"],
  authors: [{ name: "Yarns Lanka Private Limited" }],
  creator: "Yarns Lanka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yarnslanka.com",
    title: "Yarns Lanka | Premium Home Textiles & Bedding",
    description: "Discover the most sought after Egyptian Cotton Bed Linen by Yarns Lanka.",
    siteName: "Yarns Lanka",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yarns Lanka | Premium Home Textiles & Bedding",
    description: "Discover the most sought after Egyptian Cotton Bed Linen.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${plusJakartaSans.variable} light`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://i.pinimg.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Yarns Lanka",
              url: "https://yarnslanka.com",
              logo: "https://yarnslanka.com/logos/Yarns_Logo_Black.svg",
              contactPoint: {
                "@type": "ContactPoint",
                email: "Info@yarnslanka.com",
                contactType: "customer service"
              }
            })
          }}
        />
      </head>
      <body className="bg-white text-brand-black min-h-screen flex flex-col antialiased selection:bg-brand-grey-medium selection:text-white">
        {/* <Preloader /> */}
        {children}
      </body>
    </html>
  );
}
