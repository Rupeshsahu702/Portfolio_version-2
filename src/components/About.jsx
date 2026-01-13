import SectionHeader from './common/SectionHeader';

const About = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10  bg-[#0d1218]" id="about">
      <div className="max-w-[960px] w-full flex flex-col gap-10">
        <SectionHeader title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div 
              className="relative z-10 aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 shadow-xl"
              style={{
                backgroundImage: "url('/about1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </div>

          {/* About Content */}
          <div className="flex flex-col gap-6 text-slate-300">
            <h3 className="text-2xl font-bold text-white">
              I'm a passionate developer who loves bridging the gap between design and engineering.
            </h3>
            <p className="leading-relaxed">
             I specialize in building clean, scalable, and user-centric frontend interfaces that focus not just on functionality, but on delivering an enjoyable and intuitive user experience. I have a deep interest in UI/UX design, performance optimization, and writing maintainable code that scales with growing products.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, finding good games to play, or enjoying a good cup of coffee while watching about the latest trends in the world of Ai and Technologies.
            </p>
            
            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">1.5+</span>
                <span className="text-sm font-medium text-slate-500">Years Exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">20+</span>
                <span className="text-sm font-medium text-slate-500">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">15+</span>
                <span className="text-sm font-medium text-slate-500">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
