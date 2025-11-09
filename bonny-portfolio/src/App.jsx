import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-zinc-50 text-slate-800">
      <Navbar />
      <ScrollProgress />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-white text-center py-6 text-sm">
        © {new Date().getFullYear()} Bonny Makaniankhondo • Built with React &
        Tailwind
      </footer>
    </div>
  );
}
