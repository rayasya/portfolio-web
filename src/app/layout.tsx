// app/layout.tsx (jangan pakai "use client")
import type { Metadata } from "next";
import "@/app/styles/globals.css";
import ClientWrapper from "@/app/components/layouts/client_wrapper";
import CustomCursor from "./components/ui/custom_cursor";

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "This is my portfolio app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
