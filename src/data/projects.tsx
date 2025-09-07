export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  code?: string;
}

export const allProjects: Project[] = [
  {
    title: "ChefBonBon",
    description:
      "An AI-powered recipe generator that leverages the Claude AI API to create personalized recipes based on user-inputted ingredients. The application includes user authentication, a community feed, and the ability to save and share recipes.",
    technologies: [
      "React",
      "Vite",
      "Firebase",
      "Claude API",
      "Tailwind CSS",
      "Node.js",
      "Express",
    ],
    liveDemo: "https://chefbonbon.netlify.app/",
    code: "https://github.com/bonny2long/ChefBot",
  },
  {
    title: "The Wild Oasis",
    description:
      "Hotel management system built with React, Vite, and Supabase for cabins, bookings, guests, analytics, and secure authentication.",
    technologies: [
      "React",
      "Vite",
      "Supabase",
      "React Query",
      "Styled Components",
    ],
    liveDemo: "https://the-wild-oasis-bonny2long.vercel.app/login",
    code: "https://github.com/bonny2long/the-wild-oasis",
  },
  {
    title: "Bankist Marketing",
    description:
      "A JavaScript-powered banking marketing page featuring advanced DOM manipulation, lazy loading, and sticky navigation. The project demonstrates efficient event handling, smooth scrolling, and the use of the Intersection Observer API for performance optimization.",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    liveDemo: "https://bonny2long.github.io/Bankist-Marketing/",
    code: "https://github.com/bonny2long/Bankist-Marketing",
  },
  {
    title: "WorldWise App",
    description:
      "A travel tracking application built with React that allows users to log and view cities they have visited on an interactive map. The project demonstrates advanced React concepts like global state management with Context API, efficient routing with React Router, and performance optimizations using memoization hooks.",
    technologies: ["React", "React Router", "Context API", "Vite"],
    liveDemo: "https://worldwiseapp-bonny2long.netlify.app/",
    code: "https://github.com/bonny2long/worldwise-app",
  },
  {
    title: "Markdown Previewer",
    description:
      "Live Markdown previewer built in React with styled preview panel for real-time markdown editing and rendering.",
    technologies: ["React", "JavaScript", "CSS3"],
    liveDemo: "https://markdownpreviewer-bonny.netlify.app/",
    code: "https://github.com/bonny2long/MarkdownPreviewer",
  },
  {
    title: "React Quiz",
    description: "React-based quiz app with dynamic question display and interactive user interface.",
    technologies: ["React", "JavaScript", "CSS3"],
    liveDemo: "https://reactquiz-bonny2long.netlify.app/",
    code: "",
  },
  {
    title: "Drum Machine",
    description:
      "FreeCodeCamp drum machine challenge with keyboard and button support for creating beats.",
    technologies: ["React", "JavaScript", "CSS3"],
    liveDemo: "https://drummachine-bonny2long.netlify.app/",
    code: "",
  },
  {
    title: "JavaScript Calculator",
    description: "Basic calculator built with React and Tailwind CSS for mathematical operations.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://reactcalculator-bonny2long.netlify.app/",
    code: "https://github.com/bonny2long/react-calculator",
  },
  {
    title: "25 + 5 Clock",
    description: "Pomodoro-style timer built as a FreeCodeCamp project for productivity tracking.",
    technologies: ["React", "JavaScript", "CSS3"],
    liveDemo: "https://255clock-bonny2long.netlify.app/",
    code: "https://github.com/bonny2long/Twenty5clock",
  },
  {
    title: "EatNSplit",
    description: "Group bill splitting app made with React for easy expense sharing among friends.",
    technologies: ["React", "JavaScript", "CSS3"],
    liveDemo: "https://eatnsplit-bonny2long.netlify.app/",
    code: "https://github.com/bonny2long/eatNsplit",
  },
  {
    title: "Landing Page",
    description: "Responsive marketing page built with Tailwind CSS showcasing modern design principles.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://tailwindlanding-bonny2long.netlify.app/",
    code: "https://github.com/bonny2long/tailwind-landing-page",
  },
];

// Featured projects for main page (top 4 projects)
export const featuredProjects: Project[] = allProjects.slice(0, 4);