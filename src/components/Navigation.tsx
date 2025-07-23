'use client';

import { useState, useEffect } from 'react'; // Import useEffect
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const isAllProjectsPage = pathname === '/all-projects'; // Check if it's the all-projects page

  const scrollToSection = (id: string) => {
    // If on the all-projects page, navigate to home first, then scroll
    if (isAllProjectsPage) {
      window.location.href = `/#${id}`; // Redirect to home with hash
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Bonny M.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {isAllProjectsPage ? (
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 transition-colors rounded"
              >
                Home
              </button>
            ) : (
              <>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 transition-colors rounded"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 transition-colors rounded"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 transition-colors rounded"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 transition-colors rounded"
                >
                  Contact
                </button>
                <Link
                  href="/all-projects"
                  className="text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 transition-colors rounded"
                >
                  All Projects
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-700"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {isAllProjectsPage ? (
                <button
                  onClick={() => scrollToSection('home')}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 w-full text-left rounded"
                >
                  Home
                </button>
              ) : (
                <>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 w-full text-left rounded"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 w-full text-left rounded"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 w-full text-left rounded"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 w-full text-left rounded"
                  >
                    Contact
                  </button>
                  <Link
                    href="/all-projects"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:outline hover:outline-2 hover:outline-blue-600 w-full text-left rounded"
                  >
                    All Projects
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