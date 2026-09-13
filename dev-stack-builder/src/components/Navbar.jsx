import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logos/logo-text.png" 
            alt="DevStack Logo" 
            className="h-8 object-contain cursor-pointer" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-pink-600 transition">Home</a>
          <a href="#" className="text-pink-600 font-semibold">Technologies</a>
          <a href="#" className="hover:text-pink-600 transition">Projects</a>
          <a href="#" className="hover:text-pink-600 transition">About</a>
        </nav>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-600 hover:text-slate-900">Sign in</button>
          <button className="text-sm font-semibold bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition shadow-sm shadow-pink-200">Sign up</button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-600 hover:text-pink-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-pink-600">Home</a>
            <a href="#" className="text-sm font-semibold text-pink-600">Technologies</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-pink-600">Projects</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-pink-600">About</a>
            <hr className="border-slate-100 my-2" />
            <button className="text-sm font-semibold text-slate-600 text-left">Sign in</button>
            <button className="text-sm font-semibold bg-pink-600 text-white px-4 py-2 rounded-lg w-full text-center">Sign up</button>
          </div>
        </div>
      )}
    </header>
  );
}