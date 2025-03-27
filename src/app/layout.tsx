import type { Metadata } from "next";
import { Poppins, DM_Sans, Playfair_Display } from "next/font/google";
import "@/app/styles/globals.css";
import DarkModeToggle from "@/app/components/ui/dark_mode_togle";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html
      lang="en"
      className={`${poppins.variable} ${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="antialiased bg-[#161616]">{children}</body>
    </html>
  );
}
