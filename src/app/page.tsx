"use client";
import Particles from "./components/ui/particles";

export default function Home() {
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
        <h1 className="uppercase text-7xl">Under Development</h1>
      </div>
    </div>
  );
}
