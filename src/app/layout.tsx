import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rayrayaray's Portfolio",
  description:
    "Professional portfolio showcasing web and mobile development projects, skills, and experience",
  keywords:
    "web developer, mobile developer, React, React Native, JavaScript, TypeScript, Next.js",
  authors: [{ name: "Your Name" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased `}>{children}</body>
    </html>
  );
}
