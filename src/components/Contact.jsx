import SectionHeader from './common/SectionHeader';
import Button from './common/Button';

const Contact = () => {
  return (
    <section className="w-full flex bg-[#101922]  justify-center py-20 px-4 md:px-10 mb-10" id="contact">
      <div className="max-w-[960px] w-full flex flex-col md:flex-row gap-16">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 md:w-1/2">
          <SectionHeader 
            title="Get In Touch"
            subtitle="I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, let's chat."
          />
          
          <div className="flex flex-col gap-6 mt-4">
            <a className="flex items-center gap-4 group" href="mailto:hello@alexdev.com">
              <div className="w-12 h-12 rounded-lg bg-[#1c232b] flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-colors border border-slate-800">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-500">Email Me</span>
                <span className="text-lg font-bold text-white">hello@alexdev.com</span>
              </div>
            </a>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-[#1c232b] flex items-center justify-center text-blue-400 border border-slate-800">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-500">Location</span>
                <span className="text-lg font-bold text-white">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1c232b]  text-slate-400 hover:bg-blue-400 hover:text-white transition-colors" href="https://github.com/Rupeshsahu702/">
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1c232b] text-slate-400 hover:bg-blue-400 hover:text-white transition-colors" href="https://www.linkedin.com/in/rupesh-kumar-sahu-80bb51304/">
              <span className="material-symbols-outlined text-[20px]">work</span>
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1c232b] text-slate-400 hover:bg-blue-400 hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 w-full bg-[#1c232b] p-8 rounded-2xl border border-slate-800 shadow-xl">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300" htmlFor="name">
                Name
              </label>
              <input 
                className="w-full h-12 rounded-lg bg-[#111418] border border-slate-700 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all" 
                id="name" 
                placeholder="Rupesh kumar sahu" 
                type="text"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300" htmlFor="email">
                Email
              </label>
              <input 
                className="w-full h-12 rounded-lg bg-[#111418] border border-slate-700 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all" 
                id="email" 
                placeholder="Rupesh@example.com" 
                type="email"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300" htmlFor="message">
                Message
              </label>
              <textarea 
                className="w-full rounded-lg bg-[#111418] border border-slate-700 p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all resize-none" 
                id="message" 
                placeholder="How can I help you?" 
                rows="4"
              ></textarea>
            </div>
            
            <Button 
              variant="primary" 
              icon="send" 
              iconPosition="right"
              className="mt-2 bg-blue-400 w-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
