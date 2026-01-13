import SectionHeader from './common/SectionHeader';
import ProjectCard from './common/ProjectCard';

const Work = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern all-in-one eCommerce web application designed as a single destination for discovering the latest products across multiple categories.",
      image: "/project1.png",
      imageAlt: "Screenshot of an E-commerce Dashboard Interface showing charts and product lists",
      tags: ["React", "Tailwind", "Node.js"],
      demoUrl: "https://the-archive-ath.pages.dev/",
      // codeUrl: "#"
    },
    {
      title: "LMS Platform",
      description: "With my team we have built a comprehensive Learning Management System using React and Node js. Partnering with Multiple Institutions to provide modern learning experiences",
      image: "/project2.png",
      imageAlt: "Screenshot of a Social Media App Interface with dark mode",
      tags: ["Next.js", "Firebase", "Redux"],
      demoUrl: "https://lms.code2dbug.com/",
      // codeUrl: "#"
    },
    {
      title: "Companies Portfolio website",
      description: "Built a responsive portfolio website for a tech company to showcase their projects, team, and services, enhancing their online presence and client engagement.",
      image: "/project3.png",
      imageAlt: "Screenshot of a Task Management Application Kanban board",
      tags: ["React.js", "Tailwind"],
      demoUrl: "https://code2dbug.com/",
      // codeUrl: "#"
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
          <a href="https://github.com/Rupeshsahu702">
          <button className="flex items-center gap-2 text-blue-400 font-bold hover:underline">
            See More Projects
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
