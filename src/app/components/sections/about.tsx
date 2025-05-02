import SpotlightCard from "../ui/spotlight_card";

export default function About() {
  return (
    <div className="h-screen w-full bg-background flex section_custom">
      <div className="w-1/2 flex justify-center items-center h-full">
        <h1>3D Model</h1>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start gap-7 h-full">
        <p className="font-light">Who Am I ?</p>
        <h1 className="text-3xl mb-3">
          I’m a full-stack developer with a focus on web and mobile development.
          I love building clean, efficient, and meaningful tech that solves
          real-world problems.
        </h1>
        <div className="flex gap-5">
          <SpotlightCard
            spotlightColor="rgba(0, 229, 255, 0.2)"
            className="py-4 px-6 "
          >
            <a href="/Muhammad Rayasya Dziqi Cahyana_CV.pdf" className="">
              Download CV
            </a>
          </SpotlightCard>
          <SpotlightCard
            spotlightColor="rgba(69, 162, 158, 0.5)"
            className="py-4 px-6 flex gap-3 items-center"
          >
            <a href="#">Know More {">>"}</a>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
