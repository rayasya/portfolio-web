"use client";

import { useState } from "react";
import { projects } from "../data";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects", icon: "🌟" },
    { id: "web", name: "Web Apps", icon: "🌐" },
    { id: "mobile", name: "Mobile Apps", icon: "📱" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-title bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in creating innovative digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? "gradient-accent text-[var(--foreground)] shadow-lg"
                  : "bg-[var(--background)]/80 text-[var(--text-secondary)] hover:bg-[var(--accent)] border border-[var(--border)]"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              {activeFilter === category.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[var(--background)] rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(String(project.id))}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative bg-[var(--background)]/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-[var(--border)] transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl">
                {/* Project Image Placeholder */}
                <div className="relative h-48 gradient-subtle overflow-hidden">
                  <div className="absolute inset-0 gradient-badge"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {project.category === "web" ? "🌐" : "📱"}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full gradient-badge text-[var(--foreground)]`}
                    >
                      {project.category === "web" ? "Web App" : "Mobile App"}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-[var(--foreground)]">
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            className="px-4 py-2 bg-[var(--accent)]/20 backdrop-blur-sm text-[var(--foreground)] text-sm font-medium rounded-lg hover:bg-[var(--accent)]/30 transition-colors"
                          >
                            GitHub
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            className="px-4 py-2 gradient-accent text-[var(--foreground)] text-sm font-medium rounded-lg hover:opacity-80 transition-colors"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 gradient-subtle text-[var(--text-secondary)] text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 gradient-badge text-[var(--primary)] text-xs rounded-full font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300"></div>
              </div>

              {/* Enhanced Tooltip */}
              {hoveredProject === String(project.id) && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-2 bg-[var(--background)]/95 backdrop-blur-sm text-[var(--foreground)] text-sm rounded-lg opacity-0 animate-tooltip-fade-in-up pointer-events-none whitespace-nowrap z-20 border border-[var(--border)]/50">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">
                      {project.category === "web" ? "🌐" : "📱"}
                    </span>
                    <span className="font-medium">{project.title}</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--background)]/95"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[var(--background)]/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--border)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Let&apos;s work together to bring your ideas to life. I&apos;m
              always excited to take on new challenges and create something
              amazing.
            </p>
            <a href="#contact">
              <button className="px-8 py-3 gradient-accent text-[var(--foreground)] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Get In Touch
              </button>
            </a>
          </div>
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
