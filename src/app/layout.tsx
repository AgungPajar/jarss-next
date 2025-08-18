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

export const metadata = {
  title: "Coding With Jars",
  description: "Agung Pajar Website Profile",
  keywords: "Agung, Agung Pajar",
  // authors: [{ name: "SMKN 1 Garut", url: "https://smkn1garut.sch.id" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Coding With Jars",
    description: "Agung Pajar Website Profile",
    url: "https://jarsspajar.my.id",
    siteName: "Agung Pajar",
    images: [
      {
        url: "/images/jars-logo.png",
        width: 1200,
        height: 630,
        alt: "Agung Pajar",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <head>
        <meta name="color-scheme" content="light" />
        <link rel="icon" type="image/png" href="/images/jars-logo.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google" content="notranslate" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
