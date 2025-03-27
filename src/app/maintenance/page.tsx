"use client";
import Particles from "@/app/components/ui/particles";
import PixelCard from "../components/ui/spotlight_card";
import Magnet from "../components/ui/spotlight_card";
import SpotlightCard from "../components/ui/spotlight_card";

export default function Maintenance() {
  return (
    <div className="relative w-full h-screen">
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
      <div className="absolute top-0 flex justify-center items-center pointer-events-none h-screen w-full">
        <h1 className="uppercase text-7xl font-semibold">Under Development</h1>
      </div>
      <div className="absolute bottom-10 flex justify-center items-center w-full">
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.2)"
          className="py-4 px-6 "
        >
          <a href="/Muhammad Rayasya Dziqi Cahyana_CV.pdf" className="text-xl">
            Download CV
          </a>
        </SpotlightCard>
      </div>
    </div>
  );
}
