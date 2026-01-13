import SectionHeader from './common/SectionHeader';
import TimelineItem from './common/TimelineItem';

const Journey = () => {
  const experiences = [
    {
    year: "October 2025 - Present",
    title: "Senior Frontend Developer",
    company: "CODE2DBUG",
    location: "Durg, Chhattisgarh",
    description:
      "Architected and developed a comprehensive Learning Management System using React and Next.js, serving 100+ educational institutions with modern, responsive interfaces. Built a scalable student portal connecting colleges and students with enrollment management, attendance tracking, and admin panel functionality using Context API for state management. Implemented a reusable UI component library using shadcn/ui, reducing development time by 40% and ensuring design consistency across 10+ web applications.",
    isCurrent: true,
  },
  {
    year: "October 2024 - September 2025",
    title: "Frontend Developer",
    company: "WebCoodee",
    location: "Durg, Chhattisgarh",
    description:
      "Designed and developed 15+ responsive web interfaces using HTML and CSS, enhancing user experience across mobile and desktop platforms. Conducted competitive analysis on 20+ projects, identifying UX improvements that increased user engagement by 25%. Executed comprehensive SEO strategies including on-page and off-page optimization, improving organic search rankings by 40% and driving 2x traffic growth.",
    isCurrent: false,
  },
  {
    year: "May 2024 - June 2024",
    title: "Web Developer Intern",
    company: "Glistara Solution",
    location: "Remote",
    description:
      "Developed responsive front-end components for client projects using HTML, CSS, and JavaScript. Collaborated with cross-functional teams to deliver 3+ web applications within tight deadlines while maintaining code quality and responsiveness.",
    isCurrent: false,
  },
    {
      year: "2021 - 2025",
      title: "B. Tech Computer Science",
      company: "Shri Shankaracharya Technical Campus",
      description: "Specialized in Data Science and Web Development. Graduated with 8+ CGPA. Capstone project involved building an accessible mobile web application which helps to troubleshoot the laptops software which occasionally need manual troubleshooting which is complex for non-technical users.",
      isCurrent: false
    }
  ];

  return (
    <section className="w-full bg-[#101922] flex justify-center py-20 px-4 md:px-10" id="journey">
      <div className="max-w-[960px] w-full flex flex-col gap-10">
        <SectionHeader 
          title="My Journey" 
          subtitle="A timeline of my professional milestones and educational path."
        />
        
        {/* Timeline */}
        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-3 md:ml-6 my-4 space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
