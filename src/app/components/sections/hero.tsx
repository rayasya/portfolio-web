"use client";
import Particles from "../ui/particles";
import SpotlightCard from "../ui/spotlight_card";

export default function Hero() {
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
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white max-w-4xl">
            Hi, I'm Rayasya Cahyana
          </h1>
        </div>
      </div>
    </section>
  );
}
