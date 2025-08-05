"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("story");

  const experienceData = [
    {
      year: "2024 - Present",
      title: "Software Developer",
      company: "JTI Innovation",
      description: "Mengembangkan platform media pembelajaran digital",
    },
    {
      year: "2021 - 2021",
      title: "Information Technology Engineer",
      company: "JV Partner Indonesia",
      description:
        "Mengembangkan aplikasi desktop untuk otomatisasi upload Feed Instagram menggunakan Electron",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-title bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--background)]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform border border-[var(--border)]">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden gradient-avatar p-1">
                    <div className="w-full h-full rounded-full bg-[var(--accent)] flex items-center justify-center">
                      <Image
                        src="/profile.png"
                        alt="Rayasya Cahyana"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Rayasya Cahyana
                </h3>
                <p className="text-[var(--primary)] font-medium mb-4">
                  Full Stack Developer
                </p>

                <div className="flex justify-center gap-10 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--text-primary)]">
                      5+
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      Years
                      <br />
                      Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--text-primary)]">
                      20+
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      Projects
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/rayasya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[var(--primary-light)] dark:bg-[var(--primary-dark)]/30 rounded-lg hover:bg-[var(--primary-light)] dark:hover:bg-[var(--primary-dark)]/50 transition-colors"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rayasyacahyana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[var(--primary-light)] dark:bg-[var(--primary-dark)]/30 rounded-lg hover:bg-[var(--primary-light)] dark:hover:bg-[var(--primary-dark)]/50 transition-colors"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/raycahyana_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[var(--primary-light)] dark:bg-[var(--primary-dark)]/30 rounded-lg hover:bg-[var(--primary-light)] dark:hover:bg-[var(--primary-dark)]/50 transition-colors"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-[var(--background)]/80 backdrop-blur-sm rounded-xl p-1 border border-[var(--border)]">
              {[
                { id: "story", label: "My Story" },
                { id: "experience", label: "Experience" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-[var(--background)] dark:bg-[var(--primary)] text-[var(--text-primary)] dark:text-white shadow-sm"
                      : "text-[var(--text-secondary)] dark:text-[var(--text-muted)] hover:text-[var(--text-primary)] dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-[var(--background)]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[var(--border)]">
              {activeTab === "story" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-4">
                    My Journey in Tech
                  </h3>
                  <div className="space-y-4 text-[var(--text-secondary)] dark:text-[var(--text-muted)] leading-relaxed">
                    <p className="text-lg">
                      I&apos;m a passionate web and mobile developer with over 5
                      years of experience creating innovative digital solutions.
                      My journey in technology started with a curiosity for
                      building things that make a difference in people&apos;s
                      lives.
                    </p>
                    <p>
                      I specialize in developing scalable web applications using
                      modern frameworks like React and Next.js, and creating
                      engaging mobile experiences with React Native. My approach
                      combines technical expertise with a deep understanding of
                      user experience and business requirements.
                    </p>
                    <p>
                      When I&apos;m not coding, you can find me exploring new
                      technologies, contributing to open-source projects, or
                      sharing knowledge with the developer community. I believe
                      in continuous learning and staying current with industry
                      best practices.
                    </p>
                    <p>
                      I&apos;m always excited to take on new challenges and
                      collaborate with teams to bring innovative ideas to life.
                      Let&apos;s work together to create something amazing!
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-6">
                    Professional Experience
                  </h3>
                  <div className="space-y-6">
                    {experienceData.map((exp, index) => (
                      <div
                        key={index}
                        className="relative pl-8 border-l-2 border-[var(--primary)]"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--primary)] rounded-full"></div>
                        <div className="mb-2">
                          <span className="text-sm font-medium text-[var(--primary)] dark:text-[var(--primary-dark)]">
                            {exp.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-[var(--text-primary)] dark:text-white mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] mb-2">
                          {exp.company}
                        </p>
                        <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)]">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
