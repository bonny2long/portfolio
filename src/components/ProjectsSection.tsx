'use client';

import React from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'ChefBonBon',
      description: 'AI-powered recipe generator with Firebase auth and Claude API integration.',
      technologies: ['React', 'Firebase', 'Claude API', 'Tailwind CSS'],
      liveDemo: 'https://chefbonbon.netlify.app/',
      code: 'https://github.com/bonny2long/ChefBot'
    },
    {
      title: 'JavaScript Calculator',
      description: 'Basic calculator built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS'],
      liveDemo: 'https://reactcalculator-bonny2long.netlify.app/',
      code: 'https://github.com/bonny2long/react-calculator'
    },
    {
      title: 'Markdown Previewer',
      description: 'Live Markdown previewer built in React with styled preview panel.',
      technologies: ['React', 'Tailwind CSS'],
      liveDemo: 'https://markdownpreviewer-bonny.netlify.app/',
      code: 'https://github.com/bonny2long/MarkdownPreviewer'
    },
    {
      title: 'WorldWise App',
      description: 'Travel tracking app with map-based interface to log visited cities.',
      technologies: ['React', 'Tailwind CSS'],
      liveDemo: 'https://worldwiseapp-bonny2long.netlify.app/',
      code: 'https://github.com/bonny2long/worldwise-app'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">Live Demo</a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 font-medium">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/all-projects" className="text-blue-600 hover:text-blue-700 font-medium underline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}