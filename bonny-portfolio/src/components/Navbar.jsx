import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white z-50 shadow-sm backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-display tracking-wide">
          Bonny<span className="text-emerald-400">*</span>
        </h1>
        <ul className="hidden md:flex gap-8 font-medium">
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-emerald-400 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
