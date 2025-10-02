import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
