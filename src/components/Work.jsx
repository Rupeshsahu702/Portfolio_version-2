import SectionHeader from './common/SectionHeader';
import ProjectCard from './common/ProjectCard';

const Work = () => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive admin dashboard for online retailers. Features include real-time sales tracking, inventory management, and customer analytics using Chart.js.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEIOhokWS5mEQ8I2kdg5vXkUYWWDgqQafB_DOI0eXOruFJP-DKAkIIhkx3yvl_02MJTg-I8q2q0PEmov22GcAhqsw5dWvfDOsOGfE4Ok-99wGRZwugwm8qXKeTAFYJQIP2wJ4dbomeGFuxnBFuuVDlo-T265ldm5UYnji3c_q-I4xuYnlFfQ1CwGswfW-dgej-5B4Uhusw6mPsUzTfsAWdRYpfaMr6jc7NgNujOP2dp7BcdqhF4Kj2fUIfgwKqanJqBkvv_gONu5Dp",
      imageAlt: "Screenshot of an E-commerce Dashboard Interface showing charts and product lists",
      tags: ["React", "Tailwind", "Node.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Social Connect App",
      description: "A mobile-first social networking application. Allows users to connect, share updates, and message in real-time. Built with a focus on performance and accessibility.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTo_83XW6Rtts2IxGcByXywTw9QSLL7-jE3BAUbfk_nSsZJJWTiq-LP1w9v5HIV6oKzNuF71XGQyTufmkea2adMPWD6M84Ty6FLN_wnL6KPp0G5c0uPhgsl_ceArH6B_7RmGXDr_YmVRAxnLVZcUZ3WSJnUy6gIuAup0k6qReQXeICcSmoQMc6Y3O0mWOedzmr4LMQNbjWrGwH33FrC8dQBRp9uhuPvH1B9GBfmN1ZBgQxBZC2IpHjjF5MxHbfHMgc2QKAdAVfGjM8",
      imageAlt: "Screenshot of a Social Media App Interface with dark mode",
      tags: ["Next.js", "Firebase", "Redux"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "TaskMaster Pro",
      description: "Productivity tool for teams. Features drag-and-drop Kanban boards, team collaboration, and automated workflow triggers using serverless functions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmVyewqftscY9PejcVPUiFPWnu6PkkPvWPBb9wfGkDOWeh0zaKQXy_8X-6GHae0Goc_DTg2suvI-86EjnBQ9FeExE_9_viGFo1IQWSEckfsgQlWMFIYvuDi9ItPGODiE5PUryr28vhsNK2E-bj6dn5MspmXULo2fGAcZXY3TNLVMp0Uk-v5QohMPNWPmtwnxySucbvS9KLyhTZlGQ1u1xdk1X3JgHTATijwuNuMKN49FQNAYbxZlGJiMntPGWSSmYlTKs-x-WcLBz6",
      imageAlt: "Screenshot of a Task Management Application Kanban board",
      tags: ["Vue.js", "AWS", "Sass"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10 bg-[#0d1218]" id="work">
      <div className="max-w-[1080px] w-full flex flex-col gap-10">
        <SectionHeader title="Featured Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <button className="flex items-center gap-2 text-blue-400 font-bold hover:underline">
            See More Projects
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
