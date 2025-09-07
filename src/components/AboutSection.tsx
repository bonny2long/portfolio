'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Cpath d='m0 40 40-40h-20l-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Floating orbs */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></div>
                <p className="text-lg text-gray-300 leading-relaxed pl-8">
                  I am a <span className="text-purple-300 font-semibold">front-end developer</span> actively 
                  growing into <span className="text-cyan-300 font-semibold">full-stack development</span> with 
                  a strong foundation in the React and Node.js ecosystems. My background in 
                  <span className="text-purple-300 font-semibold"> electrical engineering</span> has given me 
                  excellent technical problem-solving skills and attention to detail that I bring to software development.
                </p>
              </div>
            </div>
            
            <div 
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
                <p className="text-lg text-gray-300 leading-relaxed pl-8">
                  I hold certifications in <span className="text-cyan-300 font-semibold">JavaScript</span>, 
                  <span className="text-purple-300 font-semibold"> Front End Development Libraries</span>, 
                  and <span className="text-cyan-300 font-semibold">Responsive Web Design</span> from FreeCodeCamp. 
                  I am proficient in modern React patterns, state management, component architecture, and 
                  building scalable backend systems with Node.js and Express.
                </p>
              </div>
            </div>
            
            <div 
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></div>
                <p className="text-lg text-gray-300 leading-relaxed pl-8">
                  When not coding, I enjoy learning new technologies and contributing to open-source projects. 
                  I am passionate about <span className="text-purple-300 font-semibold">clean code</span>, 
                  <span className="text-cyan-300 font-semibold"> interactive user experiences</span>, and 
                  building applications that make a difference.
                </p>
              </div>
            </div>
          </div>
          
          {/* Cards Section */}
          <div className="space-y-6">
            {/* Certifications Card */}
            <div 
              className={`transform transition-all duration-1000 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg">
                    <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Certifications
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    "JavaScript Algorithms and Data Structures – FreeCodeCamp",
                    "Responsive Web Design – FreeCodeCamp", 
                    "Front End Development Libraries – FreeCodeCamp"
                  ].map((cert) => (
                    <div key={cert} className="flex items-start gap-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Education Card */}
            <div 
              className={`transform transition-all duration-1000 delay-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg">
                    <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-cyan-300">Associate of Applied Science (AAS)</span>
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Ivy Tech Community College
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Focus: Electrical Systems / Energy Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}