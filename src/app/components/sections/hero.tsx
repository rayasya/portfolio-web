"use client";
import { useState } from "react";
import Particles from "../ui/particles";
import SpotlightCard from "../ui/spotlight_card";

export default function Hero() {
  const [isDownloadingCV, setIsDownloadingCV] = useState(false);
  const [isDownloadingPortfolio, setIsDownloadingPortfolio] = useState(false);

  const handleDownload = (fileName: string, type: "cv" | "portfolio") => {
    if (type === "cv") setIsDownloadingCV(true);
    else setIsDownloadingPortfolio(true);

    // Manual download to prevent page reload
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset status after short delay
    setTimeout(() => {
      if (type === "cv") setIsDownloadingCV(false);
      else setIsDownloadingPortfolio(false);
    }, 1000);
  };

  return (
    <section>
      <div className="relative w-full h-screen bg-background">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={250}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white max-w-4xl">
            Hi, I'm Rayasya Cahyana
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.2)"
              className="py-3 px-4 md:py-4 md:px-6 w-full sm:w-auto cursor-pointer"
            >
              <button
                onClick={() =>
                  handleDownload("Muhammad Rayasya Dziqi Cahyana_CV.pdf", "cv")
                }
                className="block text-center sm:text-left w-full"
              >
                {isDownloadingCV ? "Downloading..." : "Download CV"}
              </button>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.2)"
              className="py-3 px-4 md:py-4 md:px-6 w-full sm:w-auto cursor-pointer"
            >
              <button
                onClick={() =>
                  handleDownload(
                    "Muhammad Rayasya Dziqi Cahyana_Portfolio.pdf",
                    "portfolio"
                  )
                }
                className="block text-center sm:text-left w-full"
              >
                {isDownloadingPortfolio
                  ? "Downloading..."
                  : "Download Portfolio"}
              </button>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
