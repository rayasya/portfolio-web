"use client";

import { useEffect } from "react";
import { initLenisScroll } from "@/app/lib/lenis_init";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = initLenisScroll();
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
