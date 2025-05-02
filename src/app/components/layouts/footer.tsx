import { ChevronUp } from "lucide-react";
import ShinyText from "../ui/shiny_text";
import SpotlightCard from "../ui/spotlight_card";
import TextPressure from "../ui/text_pressure";

export default function Footer() {
  return (
    <>
      <div
        className="w-full h-auto py-16 md:py-24 md:h-[30rem] bg-surface flex flex-col items-center justify-center px-4"
        id="contacts"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
          <div className="w-full text-center">
            <TextPressure
              text="Contact"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={false}
              textColor="#ffffff"
              minFontSize={20}
              className="mb-8"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full px-20">
            <a
              href="https://www.instagram.com/raycahyana_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center md:justify-start"
            >
              <ShinyText
                text="Instagram"
                disabled={false}
                speed={3}
                className="text-xl md:text-2xl lg:text-3xl hover:text-primary transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rayasyacahyana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center md:justify-center"
            >
              <ShinyText
                text="Linkedin"
                disabled={false}
                speed={3}
                className="text-xl md:text-2xl lg:text-3xl hover:text-primary transition-colors"
              />
            </a>
            <a
              href="https://github.com/rayasya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center md:justify-end"
            >
              <ShinyText
                text="Github"
                disabled={false}
                speed={3}
                className="text-xl md:text-2xl lg:text-3xl hover:text-primary transition-colors"
              />
            </a>
          </div>
        </div>
      </div>

      <button
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 rounded-full shadow-lg hover:bg-primary-dark transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.2)"
          className="py-2 px-2 md:py-2 md:px-4"
        >
          <ChevronUp size={24} className="w-5 h-5 md:w-6 md:h-6" />
        </SpotlightCard>
      </button>
    </>
  );
}
