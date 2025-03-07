"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import SplashScreen from "./components/sections/splash_screen";
import Hero from "./components/sections/hero";

export default function Home() {
  const [showHero, setShowHero] = useState(false);
  const revealRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (showHero) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power3.inOut" }
      );
    }
  }, [showHero]);

  const handleSplashComplete = () => {
    gsap.to(revealRef.current, {
      clipPath: "circle(150% at center)",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        setShowHero(true);
      },
    });
  };

  return (
    <div className="relative w-screen h-screen bg-[#161616] overflow-hidden">
      {!showHero && <SplashScreen onComplete={handleSplashComplete} />}

      <div ref={heroRef} className="absolute inset-0 opacity-0">
        <Hero />
      </div>

      {!showHero && (
        <div
          ref={revealRef}
          className="absolute inset-0 flex items-center justify-center bg-[#161616]"
          style={{ clipPath: "circle(0% at center)" }}
        />
      )}
    </div>
  );
}
