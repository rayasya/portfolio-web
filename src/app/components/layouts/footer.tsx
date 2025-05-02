import { ChevronUp } from "lucide-react";
import ShinyText from "../ui/shiny_text";
import SpotlightCard from "../ui/spotlight_card";
import TextPressure from "../ui/text_pressure";

export default function Footer() {
  return (
    <>
      <div className="w-full h-[30rem] bg-surface flex flex-col items-center justify-center">
        <TextPressure
          text="Contact"
          flex={true}
          alpha={false}
          stroke={false}
          width={false}
          weight={true}
          italic={false}
          textColor="#ffffff"
          minFontSize={15}
        />
        <div className="flex justify-between items-center w-full section_custom">
          <a
            href="https://www.instagram.com/raycahyana_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyText
              text="Instagram"
              disabled={false}
              speed={3}
              className="text-2xl"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rayasyacahyana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyText
              text="Linkedin"
              disabled={false}
              speed={3}
              className="text-2xl"
            />
          </a>
          <a
            href="https://github.com/rayasya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyText
              text="Github"
              disabled={false}
              speed={3}
              className="text-2xl"
            />
          </a>
        </div>
      </div>

      <button
        className="fixed bottom-4 right-4 rounded-full shadow-lg hover:bg-primary-dark transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.2)"
          className="py-2 px-4"
        >
          <ChevronUp />
        </SpotlightCard>
      </button>
    </>
  );
}
