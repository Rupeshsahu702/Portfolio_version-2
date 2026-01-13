const Hero = () => {
  return (
    <section className="w-full flex bg-[#101922] justify-center py-12 md:py-24 px-4 md:px-10 min-h-[85vh] items-center" id="home">
      <div className="max-w-[1080px] w-full flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center">
        {/* Hero Content */}
        <div className="flex flex-col gap-6 md:w-1/2 items-start text-left">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 w-fit">
            <span className="material-symbols-outlined text-[18px]">waving_hand</span>
            <span className="text-xs font-bold uppercase tracking-wider">Hello World</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-white dark:text-white">
            Hi, I'm Rupesh.<br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              Frontend Developer
            </span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-[540px]">
            I craft accessible, pixel-perfect, and performant web experiences. Specialize in React, Tailwind CSS, and modern JavaScript ecosystems.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
            <a 
              className="flex items-center justify-center rounded-lg h-12 px-6 bg-blue-400 hover:bg-blue-600 text-white text-base font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/25" 
              href="#work"
            >
              View My Work
            </a>
            <a 
              className="flex items-center justify-center rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-base font-bold transition-all border border-transparent dark:border-slate-700" 
              href="#contact"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-4 mt-6 text-slate-500 dark:text-slate-500 text-sm font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </div>
          </div>
        </div>

        {/* Code Block */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-2xl opacity-30 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative w-full aspect-square max-w-[400px] bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-slate-500 font-mono">Portfolio.tsx</div>
            </div>
            <div className="p-6 font-mono text-sm md:text-base overflow-hidden">
              <div className="text-purple-400">const <span className="text-blue-400">Developer</span> = {'{'}</div>
              <div className="pl-4 text-white">name: <span className="text-green-400">'Rupesh'</span>,</div>
              <div className="pl-4 text-white">role: <span className="text-green-400">'Frontend Engineer'</span>,</div>
              <div className="pl-4 text-white">skills: [</div>
              <div className="pl-8 text-green-400">'React', 'JavaScript',</div>
              <div className="pl-8 text-green-400">'Tailwind', 'Node.js', 'Ui/UX'</div>
              <div className="pl-4 text-white">],</div>
              <div className="pl-4 text-white">hardWorker: <span className="text-orange-400">true</span>,</div>
              <div className="pl-4 text-white">coffeeLover: <span className="text-orange-400">true</span></div>
              <div className="text-purple-400">{'}'};</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
