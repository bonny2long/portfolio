"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // Only use theme after component is mounted to avoid SSR issues
  let theme = "dark";
  let toggleTheme = () => {};
  
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
    toggleTheme = themeContext.toggleTheme;
  } catch {
    // Theme context not available yet, use defaults
  }
  
  useEffect(() => {
    setMounted(true);
  }, []);
  const isAllProjectsPage = pathname === "/all-projects";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isAllProjectsPage) {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-teal-500/20 shadow-lg dark:shadow-teal-500/10"
          : "bg-transparent"
      }`}
    >
      {/* FIXED: Improved container with proper padding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* FIXED: Logo with proper left alignment */}
          <div
            className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent hover:from-teal-300 hover:to-cyan-300 transition-all duration-300 transform hover:scale-105 flex-shrink-0"
            onClick={() => scrollToSection("home")}
          >
            Bonny M.
          </div>

          {/* FIXED: Desktop Navigation with theme toggle button */}
          <div className="hidden md:flex items-center space-x-2">
            {isAllProjectsPage ? (
              <NavButton onClick={() => scrollToSection("home")} text="Home" />
            ) : (
              <>
                <NavButton
                  onClick={() => scrollToSection("home")}
                  text="Home"
                />
                <NavButton
                  onClick={() => scrollToSection("projects")}
                  text="Projects"
                />
                <NavButton
                  onClick={() => scrollToSection("about")}
                  text="About"
                />
                <NavButton
                  onClick={() => scrollToSection("contact")}
                  text="Contact"
                />
                <Link href="/all-projects">
                  <span className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-teal-500/10 group cursor-pointer">
                    All Projects
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                  </span>
                </Link>
              </>
            )}

            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="relative p-2 ml-4 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-teal-500/10 group"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
              </button>
            )}
          </div>

          {/* FIXED: Mobile Menu Button with theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-teal-500/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
              </button>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center group"
            >
              <div
                className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-gray-300 mt-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-gray-300 mt-1 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-lg border-t border-teal-500/20 rounded-b-2xl shadow-2xl">
              {isAllProjectsPage ? (
                <MobileNavButton
                  onClick={() => scrollToSection("home")}
                  text="Home"
                />
              ) : (
                <>
                  <MobileNavButton
                    onClick={() => scrollToSection("home")}
                    text="Home"
                  />
                  <MobileNavButton
                    onClick={() => scrollToSection("projects")}
                    text="Projects"
                  />
                  <MobileNavButton
                    onClick={() => scrollToSection("about")}
                    text="About"
                  />
                  <MobileNavButton
                    onClick={() => scrollToSection("contact")}
                    text="Contact"
                  />
                  <Link href="/all-projects">
                    <span className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-teal-500/10 rounded-lg transition-all duration-300 cursor-pointer">
                      All Projects
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

interface NavButtonProps {
  onClick: () => void;
  text: string;
}

function NavButton({ onClick, text }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-teal-500/10 group"
    >
      {text}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
    </button>
  );
}

interface MobileNavButtonProps {
  onClick: () => void;
  text: string;
}

function MobileNavButton({ onClick, text }: MobileNavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-teal-500/10 rounded-lg transition-all duration-300"
    >
      {text}
    </button>
  );
}
