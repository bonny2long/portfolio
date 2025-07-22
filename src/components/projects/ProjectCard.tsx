import ProjectCard from './ProjectCard';

const projects = [
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
    repo: '', // repo not listed above
    description: 'React app that displays inspirational quotes with changing colors.'
  },
  {
    title: 'Drum Machine',
    url: 'https://drummachine-bonny2long.netlify.app/',
    repo: '', // repo not listed above
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

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
