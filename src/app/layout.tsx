import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "@/app/styles/globals.css";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "This is my portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geologica.variable}>
      <body className="antialiased bg-[#161616] text-white">{children}</body>
    </html>
  );
}
