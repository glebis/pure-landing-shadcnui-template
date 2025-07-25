import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ask Wanda - AI companion",
  description:
    "A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.",
  keywords: [
    "Ask Wanda",
    "Ask Wanda Landing Page",
    "Ask Wanda Landing Page Template",
    "Ask Wanda Page",
    "Shadcn UI Landing Page",
    "Shadcn UI Blocks",
    "Shadcn UI",
    "Landing Page",
    "Tailwind CSS Landing Page",
    "Beautiful Shadcn UI Landing Page",
    "Next.js 15 Landing Page",
    "Simple Landing Page",
    "Landing Page Template",
    "Landing Page Design",
  ],
  openGraph: {
    type: "website",
    siteName: "AskWanda",
    locale: "en_US",
    url: "https://ask-wanda.vercel.app",
    title: "AskWanda - AI companion",
    description:
      "Ask Wanda - AI companion.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ask Wanda Preview",
      },
    ],
  },
  authors: [
    {
      name: "Gleb Kalinin",
      url: "https://github.com/glebkalinin",
    },
  ],
  creator: "Gleb Kalinin",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
