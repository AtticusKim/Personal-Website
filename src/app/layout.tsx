import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atticus Kim - Portfolio",
  description: "Personal portfolio showcasing professional experience, skills, and projects with a warm, premium design aesthetic.",
  keywords: ["portfolio", "developer", "professional", "experience", "projects"],
  authors: [{ name: "Atticus Kim" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Atticus Kim - Portfolio",
    description: "Personal portfolio showcasing professional experience, skills, and projects.",
    siteName: "Atticus Kim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atticus Kim - Portfolio",
    description: "Personal portfolio showcasing professional experience, skills, and projects.",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
