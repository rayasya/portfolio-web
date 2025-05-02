import SpotlightCard from "../ui/spotlight_card";

export default function About() {
  return (
    <div
      className="min-h-screen w-full bg-background flex flex-col md:flex-row section_custom py-10 md:py-0"
      id="about"
    >
      <div className="w-full md:w-1/2 flex justify-center items-center py-8 md:py-0">
        <h1>3D Model</h1>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-5 md:gap-7 px-6 md:px-8 lg:px-12">
        <p className="font-light text-sm sm:text-base">Who Am I ?</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl mb-2 md:mb-3">
          I'm a full-stack developer with a focus on web and mobile development.
          I love building clean, efficient, and meaningful tech that solves
          real-world problems.
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
          <SpotlightCard
            spotlightColor="rgba(0, 229, 255, 0.2)"
            className="py-3 px-4 md:py-4 md:px-6 w-full sm:w-auto"
          >
            <a
              href="/Muhammad Rayasya Dziqi Cahyana_CV.pdf"
              className="block text-center sm:text-left"
            >
              Download CV
            </a>
          </SpotlightCard>
          <SpotlightCard
            spotlightColor="rgba(69, 162, 158, 0.5)"
            className="py-3 px-4 md:py-4 md:px-6 flex gap-2 md:gap-3 items-center justify-center sm:justify-start w-full sm:w-auto"
          >
            <a href="#" className="flex items-center">
              Know More <span className="ml-1">{">>"}</span>
            </a>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
