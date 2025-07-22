import React from 'react';

   const allProjects = [
     {
       title: 'ChefBonBon (Full Stack)',
       url: 'https://chefbonbon.netlify.app/',
       repo: 'https://github.com/bonny2long/ChefBot',
       description: 'AI-powered recipe generator with Firebase auth and Claude API integration.'
     },
     {
       title: 'Wall (Facebook 2009 Mock)',
       url: 'https://wall-bonny2long.vercel.app/',
       repo: 'https://github.com/bonny2long/wall',
       description: 'React + Next.js 15 social feed clone styled after 2009 Facebook.'
     },
     {
       title: 'Marketplace Clone',
       url: 'https://marketplace-demo-ecru.vercel.app/',
       repo: 'https://github.com/bonny2long/marketplace-demo2',
       description: 'Supabase + Next.js clone of Facebook Marketplace with listings, messaging, and photos.'
     },
     {
       title: 'WorldWise App',
       url: 'https://worldwiseapp-bonny2long.netlify.app/',
       repo: 'https://github.com/bonny2long/worldwise-app',
       description: 'Travel tracking app with map-based interface to log visited cities.'
     },
     {
       title: 'Markdown Previewer',
       url: 'https://markdownpreviewer-bonny.netlify.app/',
       repo: 'https://github.com/bonny2long/MarkdownPreviewer',
       description: 'Live Markdown previewer built in React with styled preview panel.'
     },
     {
       title: 'Random Quote Generator',
       url: 'https://reactquiz-bonny2long.netlify.app/',
       repo: '',
       description: 'React app that displays inspirational quotes with changing colors.'
     },
     {
       title: 'Drum Machine',
       url: 'https://drummachine-bonny2long.netlify.app/',
       repo: '',
       description: 'FreeCodeCamp drum machine challenge with keyboard and button support.'
     },
     {
       title: 'JavaScript Calculator',
       url: 'https://reactcalculator-bonny2long.netlify.app/',
       repo: 'https://github.com/bonny2long/react-calculator',
       description: 'Basic calculator built with React and Tailwind CSS.'
     },
     {
       title: '25 + 5 Clock',
       url: 'https://255clock-bonny2long.netlify.app/',
       repo: 'https://github.com/bonny2long/Twenty5clock',
       description: 'Pomodoro-style timer built as a FreeCodeCamp project.'
     },
     {
       title: 'EatNSplit',
       url: 'https://eatnsplit-bonny2long.netlify.app/',
       repo: 'https://github.com/bonny2long/eatNsplit',
       description: 'Group bill splitting app made with React.'
     },
     {
       title: 'Landing Page',
       url: 'https://tailwindlanding-bonny2long.netlify.app/',
       repo: 'https://github.com/bonny2long/tailwind-landing-page',
       description: 'Responsive marketing page built with Tailwind CSS.'
     },
   ];

   export default function AllProjectsPage() {
     return (
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">All Projects</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {allProjects.map((project) => (
             <div key={project.title} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               <div className="p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                 <p className="text-gray-600 mb-4">{project.description}</p>
                 <div className="flex gap-3">
                   <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">Live Demo</a>
                   {project.repo && (
                     <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 font-medium">Code</a>
                   )}
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     );
   }