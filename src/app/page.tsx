"use client";

import { useEffect } from "react";
import Navbar from "./components/layouts/navbar";
import About from "./components/sections/about";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./components/sections/techstack";
import Footer from "./components/layouts/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const scrollSection =
      document.querySelectorAll<HTMLElement>(".scroll-section");

    scrollSection.forEach((section) => {
      const wrapper = section.querySelector(".wrapper")!;
      const items = wrapper.querySelectorAll<HTMLElement>(".item");

      initScroll(section, items);
    });

    function initScroll(section: HTMLElement, items: NodeListOf<HTMLElement>) {
      items.forEach((item, index) => {
        if (index !== 0) {
          gsap.set(item, { yPercent: 100 });
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: `+=${items.length * 100}%`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      items.forEach((item, index) => {
        timeline.to(item, {
          scale: 1,
          borderRadius: "10px",
        });

        const next = items[index + 1];
        if (next) {
          timeline.to(next, { yPercent: 0 }, "<");
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <section className="scroll-section overflow-hidden">
        <div className="wrapper h-screen">
          <div className="list flex flex-col items-center h-full relative p-1">
            <div className="item w-screen h-full absolute inset-0 shadow-lg overflow-hidden">
              <About />
            </div>

            <div className="item w-screen h-full absolute inset-0 shadow-lg overflow-hidden">
              <Projects />
            </div>

            <div className="item w-screen h-full absolute inset-0 shadow-lg overflow-hidden">
              <TechStack />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
