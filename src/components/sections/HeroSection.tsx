"use client";

import { ArrowDownToLineIcon } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="items-center">
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full gradient-badge border border-[var(--border)] text-[var(--secondary)] text-sm font-medium mb-6 animate-fade-in">
              <span className="w-3 h-3 bg-[var(--primary)] rounded-full mr-3 animate-pulse"></span>
              Available for new opportunities
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-bold">
                <span className=" gradient-title">
                  Hi, I&apos;m Rayasya Cahyana
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Crafting exceptional digital experiences with passion and
                precision. Specializing in modern web applications and mobile
                development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 gradient-accent text-[var(--foreground)] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 gradient-accent-hover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Download <ArrowDownToLineIcon className="inline ml-2" />
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 mt-2 w-44 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                      <a
                        href="/Muhammad Rayasya Dziqi Cahyana_Portfolio.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        download={true}
                      >
                        Download Portfolio
                      </a>
                      <a
                        href="/Muhammad Rayasya Dziqi Cahyana_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        download={true}
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                )}
              </div>
              {dropdownOpen && (
                <div
                  className="fixed inset-0 z-0"
                  onClick={() => setDropdownOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}
