'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          About Me
        </h2>
        <div className="space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a front-end developer actively growing into full-stack development with a strong foundation in the React and Node.js ecosystems. 
            My background in electrical engineering has given me excellent technical problem-solving skills and attention to detail that I bring to software development.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I hold certifications in JavaScript, Front End Development Libraries, Data Structures, and Responsive Web Design from FreeCodeCamp. 
            I am proficient in modern React patterns, state management, component architecture, and building scalable backend systems with Node.js and Express.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When not coding, I enjoy learning new technologies and contributing to open-source projects. I am passionate about clean code, 
            interactive user experiences, and building applications that make a difference.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                JavaScript Algorithms and Data Structures – FreeCodeCamp
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Responsive Web Design – FreeCodeCamp
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Front End Development Libraries – FreeCodeCamp
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
            <p className="text-gray-700">
              <strong>Associate of Applied Science (AAS)</strong> – Ivy Tech Community College<br/>
              Focus: Electrical Systems / Energy Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}