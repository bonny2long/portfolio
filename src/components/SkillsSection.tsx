"use client";

import React, { useState, useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      { name: "React.js", color: "from-blue-500 to-blue-600", level: 90 },
      { name: "Next.js", color: "from-gray-700 to-gray-900", level: 85 },
      { name: "JavaScript", color: "from-yellow-500 to-yellow-600", level: 88 },
      { name: "Tailwind CSS", color: "from-teal-500 to-teal-600", level: 92 },
      { name: "Redux Toolkit", color: "from-teal-500 to-cyan-600", level: 78 },
    ],
  },
  {
    title: "Backend Development",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    skills: [
      { name: "Node.js", color: "from-green-500 to-green-600", level: 82 },
      { name: "Express.js", color: "from-gray-600 to-gray-700", level: 80 },
      { name: "MongoDB", color: "from-green-600 to-green-700", level: 75 },
      { name: "Supabase", color: "from-emerald-500 to-emerald-600", level: 88 },
      { name: "REST APIs", color: "from-blue-600 to-blue-700", level: 85 },
    ],
  },
  {
    title: "Tools & Deployment",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    skills: [
      { name: "Git & GitHub", color: "from-gray-800 to-gray-900", level: 90 },
      { name: "Vercel", color: "from-black to-gray-800", level: 88 },
      { name: "VS Code", color: "from-blue-500 to-blue-700", level: 95 },
      { name: "Chrome DevTools", color: "from-red-500 to-red-600", level: 85 },
      { name: "Postman", color: "from-orange-500 to-orange-600", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B4D8' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-teal-500/20 rounded-2xl p-6 hover:border-teal-400/40 transition-all duration-500 transform hover:scale-105"
              style={{
                animationDelay: `${categoryIndex * 200}ms`,
                animation: isVisible ? "slideUp 0.8s ease-out forwards" : "",
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-lg text-teal-300 group-hover:text-teal-200 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-teal-300 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      isVisible={isVisible}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fillBar {
          from {
            width: 0;
          }
          to {
            width: var(--target-width);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}

function SkillBar({
  skill,
  isVisible,
  delay,
}: {
  skill: { name: string; color: string; level: number };
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div className="group/skill">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-400 group-hover/skill:text-gray-300 transition-colors duration-300">
          {skill.level}%
        </span>
      </div>

      <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}
