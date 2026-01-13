import { Link } from "react-router-dom";

const Header = () => {
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
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#home">Home</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#about">About</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#journey">Journey</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#skills">Skills</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#work">Work</a>
          <a className="text-sm text-white font-medium hover:text-blue-400 transition-colors" href="#contact">Contact</a>
        </nav>
        
        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-blue-400 hover:bg-blue-600 transition-colors text-white text-sm font-bold shadow-lg shadow-blue-500/20">
            <span  className="truncate">Download Resume</span>
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
