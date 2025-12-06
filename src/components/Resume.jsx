import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/images/Bonny-Makaniankhondo-Full Stack Software Developer.pdf";

const expertise = [
  {
    title: "Frontend Architecture",
    bullets: [
      "React + Vite/Tailwind for quick, reliable UI delivery.",
      "Design systems and accessibility-first flows that feel clear and intentional.",
      "Interactive dashboards with data viz and thoughtful motion.",
    ],
  },
  {
    title: "Backend & Data",
    bullets: [
      "Node.js/Express APIs with SQL and Supabase/Postgres as the backbone.",
      "Data modeling, migrations, and row-level security for trustworthy access.",
      "Real-time updates and role-aware features for product-grade experiences.",
    ],
  },
  {
    title: "AI & Insights",
    bullets: [
      "Claude/LLM integrations that generate summaries and guided actions.",
      "Power BI and custom visualizations to make metrics executive-ready.",
      "Data pipelines that turn raw signals into decision-ready outputs.",
    ],
  },
  {
    title: "DX & Quality",
    bullets: [
      "Clean architecture and modular components to keep teams fast.",
      "Testing and linting setups that protect delivery cadence.",
      "Performance tuning to keep apps quick under load.",
    ],
  },
];

const projects = [
  {
    name: "Analytics Dashboard",
    subtitle: "Full stack | AI insights | Executive reporting",
    impact:
      "Built a multi-hub analytics platform that turns customer signals into leader-ready summaries, with tiered access, deep filters, and data transformation utilities for reliable KPIs.",
  },
  {
    name: "ChefBonBon",
    subtitle: "LLM-powered recipes | Database engineering",
    impact:
      "Created an end-to-end AI recipe experience: React + Tailwind UI, Claude-backed prompt pipeline, and a Supabase/Postgres migration with secure auth and real-time updates.",
  },
  {
    name: "SynceUp",
    subtitle: "Collaboration platform | Frontend architecture",
    impact:
      "Leading frontend and analytics for a mentorship platform, shaping component patterns, responsive layouts, and data stories that keep interns and alumni engaged.",
  },
];

const wins = [
  "Migrated production data from Firebase/Firestore to Supabase/Postgres with new relational schemas, indexing, and faster queries.",
  "Implemented role-based access, admin workflows, and secure sessions to keep sensitive features guarded without slowing users down.",
  "Optimized API and component architecture to reduce re-renders and improve perceived speed across responsive breakpoints.",
  "Delivered real-time insights with Recharts, custom UI cards, and AI summaries so stakeholders can act quickly.",
];

export default function Resume() {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white text-slate-800 py-20 px-6 md:px-12 border-t border-zinc-200"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold text-emerald-600">
              Resume
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              I design and ship full-stack, data-driven products - from React frontends and
              Node/SQL backends to AI-powered insights and executive dashboards. Here's how
              the portfolio aligns with the depth in my resume.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={resumePDF}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all shadow-lg"
              >
                Download Resume (PDF)
              </a>
              <a
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-500 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-all"
              >
                View in Browser
              </a>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700 mb-2">
              Snapshot
            </p>
            <p className="text-slate-700 leading-relaxed">
              Full Stack Software Developer with 10+ years of experience building scalable
              web apps, AI-assisted insights, and data visualization. Comfortable leading
              architecture, pairing with design, and delivering production-ready features end
              to end.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="border border-zinc-200 rounded-2xl p-6 shadow-sm bg-slate-50"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {item.title}
              </h3>
              <ul className="space-y-2 text-slate-600">
                {item.bullets.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-display font-bold text-slate-900">
            Flagship Work
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="border border-zinc-200 rounded-2xl p-6 shadow-sm bg-white"
              >
                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                  {project.name}
                </p>
                <p className="text-slate-700 font-semibold mt-1">{project.subtitle}</p>
                <p className="text-slate-600 mt-3 leading-relaxed">{project.impact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-display font-bold text-slate-900">
            Recent Wins
          </h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {wins.map((win) => (
              <li
                key={win}
                className="flex items-start gap-3 border border-zinc-200 rounded-xl p-4 bg-slate-50"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-slate-700 leading-relaxed">{win}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
