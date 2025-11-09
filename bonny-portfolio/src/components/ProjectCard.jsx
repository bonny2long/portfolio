import React from "react";

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="flex flex-col justify-between bg-white shadow-md hover:shadow-lg rounded-xl p-6 border border-zinc-200 transition-all h-full">
      <div>
        <h3 className="text-2xl font-display font-bold mb-2 text-slate-900">
          {title}
        </h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 font-semibold hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
