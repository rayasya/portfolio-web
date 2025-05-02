"use client";

import gsap from "gsap";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursorCustom = document.querySelector(
      ".cursorCustom"
    ) as HTMLDivElement | null;

    const moveCursor = (e: MouseEvent): void => {
      gsap.to(cursorCustom, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    gsap.set(cursorCustom, {
      xPercent: -25,
      yPercent: -25,
    });

    window.addEventListener("mousemove", moveCursor);

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoveredTarget = target.closest(
        ".hover-target"
      ) as HTMLElement | null;

      if (hoveredTarget && cursorCustom) {
        const img = hoveredTarget.getAttribute("data-cursor-img");

        // Animasi masuk ke mode gambar
        gsap.to(cursorCustom, {
          width: 400,
          height: 267,
          borderRadius: "10",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "normal",
          duration: 0.3,
          ease: "power2.out",
          border: "3px solid white",
        });
      } else if (cursorCustom) {
        // Animasi balik ke lingkaran kecil
        gsap.to(cursorCustom, {
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundImage: "",
          mixBlendMode: "difference",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="z-20">
      <div className="cursorCustom fixed size-5 rounded-full bg-white z-50 mix-blend-difference pointer-events-none"></div>
    </div>
  );
};

export default CustomCursor;
