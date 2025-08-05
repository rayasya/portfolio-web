"use client";

import { useState } from "react";
import { certificates } from "../data";

export default function CertificatesSection() {
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    {
      id: "all",
      name: "All",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "certificates",
      name: "Certificates",
      icon: "📝",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "achievements",
      name: "Achievements",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === activeFilter);

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-title bg-clip-text text-transparent">
              Certificates & Achievements
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            Professional certifications and achievements that validate my
            expertise and commitment to continuous learning.
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
          {filteredCertificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className="group relative"
              onMouseEnter={() => setHoveredCert(String(certificate.id))}
              onMouseLeave={() => setHoveredCert(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative bg-[var(--background)]/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[var(--border)] transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl">
                {/* Certificate Badge */}
                {certificate.category === "achievements" && (
                  <div className="absolute -top-3 -right-3 w-8 h-8 gradient-badge rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[var(--foreground)] text-sm">🏆</span>
                  </div>
                )}

                {/* Main Content */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto gradient-avatar rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-[var(--foreground)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-[var(--primary-light)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300"></div>
                </div>

                {/* Certificate Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-2">
                    {certificate.issuer}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm mb-4">
                    {certificate.date}
                  </p>
                  <a
                    href={certificate.link}
                    className="inline-block px-4 py-2 gradient-accent text-[var(--foreground)] rounded-lg font-medium transition-colors hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-full bg-[var(--border-light)] dark:bg-[var(--border-dark)] rounded-full h-1">
                    <div
                      className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] h-1 rounded-full transition-all duration-1000"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Tooltip */}
              {hoveredCert === String(certificate.id) && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-2 bg-[var(--background)]/95 dark:bg-[var(--background)]/95 backdrop-blur-sm text-[var(--foreground)] text-sm rounded-lg opacity-0 animate-tooltip-fade-in-up pointer-events-none whitespace-nowrap z-20 border border-[var(--border)]/50">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🏆</span>
                    <span className="font-medium">{certificate.title}</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--background)]/95 dark:border-t-[var(--background)]/95"></div>
                </div>
              )}
            </div>
          ))}
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
