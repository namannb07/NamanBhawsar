import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";
import SmoothScroll from "./components/ui/SmoothScroll";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naman Bhawsar | Software Developer",
  description:
    "Naman Bhawsar is a Software Developer currently focused on building user experiences that drive growth. Explore my portfolio to see my work.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
    "Naman Bhawsar",
  ],
  openGraph: {
    title: "Naman Bhawsar | Software Developer",
    description:
      "Naman Bhawsar is a Software Developer currently focused on building user experiences that drive growth. Explore my portfolio to see my work.",
    url: "https://github.com/namannb07",
    siteName: "Naman Bhawsar Portfolio",
    images: [
      {
        url: "/Naman.jpg",
        width: 1200,
        height: 630,
        alt: "Naman Bhawsar — Software Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Bhawsar | Software Developer",
    description:
      "Naman Bhawsar is a Software Developer currently focused on building user experiences that drive growth. Explore my portfolio to see my work.",
    images: ["/Naman.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "Re6_RGBe5cplEPEQLJMbb8HAovD3iVbmjjLPoSJOwWk",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <SmoothScroll>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  );
}
