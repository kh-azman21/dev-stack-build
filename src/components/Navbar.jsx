import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md font-sans">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        
        <div className="flex items-center justify-center lg:justify-start">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo-text.png" alt="DevStack" className="h-7 sm:h-8 object-contain" />
          </a>
        </div>

        
        <ul className="hidden lg:flex lg:items-center lg:gap-8 text-sm font-medium text-slate-600">
          <li><a href="#" className="text-pink-500 font-semibold">Home</a></li>
          <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
          <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
          <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
        </ul>

        
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#signin"
            className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 sm:px-4 sm:py-2 sm:text-sm"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-xl bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 shadow-xs sm:px-4 sm:py-2 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>

    
      {isMobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            <li>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-pink-500 font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#technologies" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-slate-900">
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-slate-900">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-slate-900">
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-slate-900">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
