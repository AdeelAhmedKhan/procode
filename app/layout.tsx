import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const baseUrl = 'https://procode.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl), 
  title: "ProCode - RPA, AI, Document Processing & Full-Stack Development",
  description: "ProCode offers cutting-edge solutions in RPA, AI, Document Processing, Retrieval-Augmented Generation (RAG), and full-stack development to help businesses automate, innovate, and scale efficiently.",
     icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' }
    ]
  },
  keywords: "RPA, AI, Document Processing, RAG, Full-Stack Development, Automation, ProCode",
  robots: "index, follow",
  openGraph: {
    title: "ProCode - RPA, AI, Document Processing & Full-Stack Development",
    description: "ProCode provides advanced technology solutions including RPA, AI, Document Processing, RAG, and full-stack development for business automation and growth.",
    url: baseUrl, 
    siteName: "ProCode",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProCode - Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProCode - RPA, AI, Document Processing & Full-Stack Development",
    description: "ProCode provides advanced solutions in RPA, AI, Document Processing, RAG, and full-stack development to help businesses automate and innovate.",
    images: ["/og-image.png"], 
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
        className={`${sora.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
