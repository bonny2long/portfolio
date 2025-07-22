'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Bonny Makaniankhondo
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Front-end developer actively growing into full-stack development, with expertise in React, Node.js, and modern web technologies. 
            Passionate about clean code, interactive user experiences, and scalable backend systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:bonnymak@icloud.com" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Get In Touch
            </a>
            <a 
              href="https://github.com/bonny2long" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-medium"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}