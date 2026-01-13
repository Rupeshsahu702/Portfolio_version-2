import SectionHeader from './common/SectionHeader';
import SkillCard from './common/SkillCard';

const Skills = () => {
  const skills = [
    { name: 'React', icon: 'code', color: 'text-sky-400' },
    { name: 'TypeScript', icon: 'css', color: 'text-blue-600' },
    { name: 'Tailwind', icon: 'brush', color: 'text-teal-400' },
    { name: 'JavaScript', icon: 'javascript', color: 'text-yellow-400' },
    { name: 'HTML5', icon: 'html', color: 'text-orange-500' },
    { name: 'Next.js', icon: 'terminal', color: 'text-white' },
    { name: 'Node.js', icon: 'api', color: 'text-green-500' },
    { name: 'GraphQL', icon: 'database', color: 'text-purple-500' },
    { name: 'Git', icon: 'folder_zip', color: 'text-red-500' },
    { name: 'Figma', icon: 'layers', color: 'text-blue-300' },
    { name: 'AWS', icon: 'cloud', color: 'text-gray-500' },
    { name: 'Redux', icon: 'extension', color: 'text-indigo-400' }
  ];

  return (
    <section className="w-full flex bg-[#101922] justify-center py-20 px-4 md:px-10" id="skills">
      <div className="max-w-[960px] w-full flex flex-col gap-10">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="Technologies and tools I use to build high-performance applications."
          centered={true}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              name={skill.name}
              icon={skill.icon}
              iconColor={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
