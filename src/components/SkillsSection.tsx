'use client';

import React from 'react';

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend Development</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">JavaScript</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Redux Toolkit</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">React Router</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Development</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Express.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">MongoDB</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">JWT</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Supabase</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">REST APIs</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Deployment</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Git</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">GitHub</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Vercel</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">VS Code</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Postman</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Chrome DevTools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}