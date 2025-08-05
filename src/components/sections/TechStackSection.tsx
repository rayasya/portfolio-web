"use client";

import { useState, useEffect, useRef } from "react";
import { techStack } from "../data";

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const getTechByCategory = (category: string) => {
    if (category === "all") return techStack;
    return techStack.filter((tech) => tech.category === category);
  };

  // Helper function to get icon from simple-icons using dynamic import
  const getSimpleIcon = async (
    slug: string
  ): Promise<{ path: string; title: string } | null> => {
    try {
      const icon = await import(`simple-icons/icons/${slug}.js`);
      return icon.default;
    } catch (error) {
      console.error("Error loading icon:", error);
      return null;
    }
  };

  // State to store loaded icons
  const [loadedIcons, setLoadedIcons] = useState<
    Record<string, { path: string; title: string } | null>
  >({});
  const loadedIconsRef = useRef<Set<string>>(new Set());

  // Load icons when component mounts or category changes
  useEffect(() => {
    const loadIcons = async () => {
      const currentTechs = getTechByCategory(activeCategory);
      const iconsToLoad = currentTechs
        .filter(
          (tech) =>
            tech.simpleIconsSlug &&
            !loadedIconsRef.current.has(tech.simpleIconsSlug)
        )
        .map((tech) => tech.simpleIconsSlug!);

      if (iconsToLoad.length === 0) return;

      const iconPromises = iconsToLoad.map(async (slug) => {
        const icon = await getSimpleIcon(slug);
        loadedIconsRef.current.add(slug);
        return { slug, icon };
      });

      const results = await Promise.all(iconPromises);
      const newIcons: Record<string, { path: string; title: string } | null> =
        {};
      results.forEach(({ slug, icon }) => {
        newIcons[slug] = icon;
      });

      setLoadedIcons((prev) => ({ ...prev, ...newIcons }));
    };

    loadIcons();
  }, [activeCategory]);

  const categories = [
    {
      id: "all",
      name: "All",
      icon: "🌟",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: "🎨",
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: "backend",
      name: "Backend",
      icon: "⚙️",
      color: "from-purple-400 to-violet-500",
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: "📱",
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: "tools",
      name: "Tools",
      icon: "🛠️",
      color: "from-rose-400 to-pink-500",
    },
  ];

  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-title bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "gradient-accent text-[var(--foreground)] shadow-lg"
                  : "bg-[var(--background)]/80 text-[var(--text-secondary)] hover:bg-[var(--accent)] border border-[var(--border)]"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              {activeCategory === category.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[var(--background)] rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {getTechByCategory(activeCategory).map((tech, index) => {
            const simpleIcon = tech.simpleIconsSlug
              ? loadedIcons[tech.simpleIconsSlug]
              : null;

            return (
              <div
                key={tech.name}
                className="group relative"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative">
                  {/* Main Card */}
                  <div className="relative bg-[var(--background)]/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[var(--border)] transition-all duration-500 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl cursor-pointer group-hover:bg-[var(--background)]">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 gradient-badge rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon Container */}
                    <div className="relative z-10 flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 gradient-avatar rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                        {simpleIcon ? (
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label={tech.name}
                          >
                            <path d={simpleIcon.path} fill="currentColor" />
                          </svg>
                        ) : (
                          tech.icon
                        )}
                      </div>

                      {/* Tech Name */}
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors duration-300">
                          {tech.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] mt-1 capitalize">
                          {tech.category}
                        </p>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-[var(--primary-light)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300"></div>
                  </div>

                  {/* Enhanced Tooltip */}
                  {hoveredTech === tech.name && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-2 bg-[var(--background)]/95 dark:bg-[var(--background)]/95 backdrop-blur-sm text-[var(--foreground)] text-sm rounded-lg opacity-0 animate-tooltip-fade-in-up pointer-events-none whitespace-nowrap z-20 border border-[var(--border)]/50">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">
                          {simpleIcon ? (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-label={tech.name}
                            >
                              <path d={simpleIcon.path} fill="currentColor" />
                            </svg>
                          ) : (
                            tech.icon
                          )}
                        </span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--background)]/95 dark:border-t-[var(--background)]/95"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
