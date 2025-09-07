import { allProjects } from "../../data/projects";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  repo?: string;
}

export default function ProjectCard({
  title,
  description,
  url,
  repo,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Live Demo
          </a>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 font-medium"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((project) => (
          <ProjectCard 
            key={project.title} 
            title={project.title}
            description={project.description}
            url={project.liveDemo}
            repo={project.code}
          />
        ))}
      </div>
    </div>
  );
}
