"use client";

import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  code?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  liveDemo,
  code,
}: ProjectCardProps) {
  return (
    /* FIXED: Added h-full to make all cards same height and flex-col for proper content distribution */
    <div className="group relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg border border-teal-500/20 rounded-2xl overflow-hidden hover:border-teal-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:scale-[1.02] flex flex-col">
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* FIXED: Using flex-1 to ensure content area fills available space */}
      <div className="relative z-10 p-8 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-300 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>

        {/* Description - FIXED: Using flex-1 so it grows to fill space */}
        <p className="text-gray-300 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Technologies - FIXED: Always positioned at bottom with mt-auto */}
        <div className="mb-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-teal-600/30 to-cyan-600/30 border border-teal-500/30 rounded-full text-sm font-medium text-teal-200 group-hover:border-teal-400/50 group-hover:text-teal-100 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons - FIXED: Always at bottom */}
        <div className="flex gap-4">
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn relative px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl text-white font-semibold text-center transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </a>

          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn relative px-6 py-3 border-2 border-teal-400/50 rounded-xl text-teal-300 font-semibold text-center hover:bg-teal-500/10 hover:border-teal-400/80 transform hover:scale-105 transition-all duration-300"
            >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </span>
            </a>
          )}
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 -z-10 group-hover:animate-pulse"></div>
    </div>
  );
}
