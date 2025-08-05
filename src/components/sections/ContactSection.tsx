"use client";

import { useState } from "react";

export default function ContactSection() {
  const contactMethods = [
    {
      id: "email",
      icon: "📧",
      title: "Email",
      value: "rayasya.dziqi@gmail.com",
      link: "mailto:rayasya.dziqi@gmail.com",
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: "availability",
      icon: "✅",
      title: "Availability",
      value: "Available for freelance work",
      link: "#",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: "📷",
      url: "https://www.instagram.com/raycahyana_/",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/rayasyacahyana/",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/rayasya",
      color: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-title bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how we can work together to create
            something amazing!
          </p>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-[var(--background)]/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--border)] w-full">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Let&apos;s Connect
            </h3>

            <div className="space-y-6">
              {contactMethods.map((method) => (
                <div key={method.id} className="group relative">
                  <a
                    href={method.link}
                    className="flex items-center p-4 rounded-xl gradient-subtle hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 gradient-badge rounded-xl flex items-center justify-center text-[var(--foreground)] text-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        {method.title}
                      </h4>
                      <p className="text-[var(--text-secondary)]">
                        {method.value}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-[var(--text-muted)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group relative p-3 gradient-subtle rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[var(--foreground)] text-[var(--background)] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
