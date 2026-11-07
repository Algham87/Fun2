import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://fun2steamboatandgrill.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "FUN2 Steamboat & Grill | Steamboat, Grill & Wagyu",
    template: "%s | FUN2 Steamboat & Grill",
  },

  description:
    "Discover FUN2 Steamboat & Grill in Brunei Darussalam. Enjoy steamboat, tabletop grill, premium Wagyu, Australian beef, seafood, and signature combo sets.",

  applicationName: "FUN2 Steamboat & Grill",

  alternates: {
    canonical: "/",
  },

  openGraph: {
  type: "website",
  url: siteUrl,
  siteName: "FUN2 Steamboat & Grill",
  title: "FUN2 Steamboat & Grill | Steamboat, Grill & Wagyu",
  description:
    "Enjoy steamboat, tabletop grill, premium Wagyu, Australian beef, seafood, and signature combo sets at FUN2 Steamboat & Grill.",
  images: [
  {
    url: "/images/link.png",
    width: 1200,
    height: 630,
    alt: "FUN2 Steamboat & Grill",
  },
  ],
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}