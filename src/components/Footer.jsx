const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-slate-800 bg-[#111418]">
      <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© 2025 Rupesh kumar sahu. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-red-500 text-xs">❤</span> by Rupesh 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
