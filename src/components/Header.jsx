import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#111418]/90 backdrop-blur-md">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-blue-400">terminal</span>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] font-mono">
            &lt;DevPortfolio /&gt;
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#home">Home</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#about">About</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#journey">Journey</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#skills">Skills</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#work">Work</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#contact">Contact</a>
        </nav>

        {/* Desktop CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Resume Button */}
          <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-blue-400 hover:bg-blue-600 transition-colors text-white text-sm font-bold shadow-lg shadow-blue-500/20">
              <span className="truncate">Download Resume</span>
            </button>
          </Link>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-slate-800/50 transition-colors group"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white rounded-sm my-1 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[57px]
  h-[calc(100vh-57px)]
  bg-[#101922] 
  z-60
  transition-all duration-300 ease-in-out 
  ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >

        <nav className={`flex flex-col bg-[#101922] items-center justify-center h-full gap-8 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <a
            className="text-2xl text-white font-medium hover:text-blue-400 transition-all duration-200 hover:scale-110"
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            className="text-2xl text-white font-medium hover:text-blue-400 transition-all duration-200 hover:scale-110"
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            className="text-2xl text-white font-medium hover:text-blue-400 transition-all duration-200 hover:scale-110"
            href="#journey"
            onClick={closeMenu}
          >
            Journey
          </a>
          <a
            className="text-2xl text-white font-medium hover:text-blue-400 transition-all duration-200 hover:scale-110"
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            className="text-2xl text-white font-medium hover:text-blue-400 transition-all duration-200 hover:scale-110"
            href="#work"
            onClick={closeMenu}
          >
            Work
          </a>
          <a
            className="text-2xl text-white font-medium hover:text-blue-400 transition-all duration-200 hover:scale-110"
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

          {/* Mobile Resume Button */}
          <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <button className="mt-6 flex items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-blue-400 hover:bg-blue-600 transition-all duration-200 hover:scale-105 text-white text-base font-bold shadow-xl shadow-blue-500/30">
              <span className="truncate">Download Resume</span>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
