import PropTypes from 'prop-types';
import Badge from './Badge';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  imageAlt,
  tags = [], 
  demoUrl, 
  codeUrl 
}) => {
  return (
    <div className="group flex flex-col bg-[#1c232b] rounded-xl overflow-hidden border border-slate-800 hover:border-blue-400/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden bg-slate-800 relative">
        <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
          <span className="bg-white text-slate-900 font-bold py-2 px-4 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
            View Project
          </span>
        </div>
        <img 
          className="w-full h-full object-cover" 
          src={image}
          alt={imageAlt || title}
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-col p-6 gap-4 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <div className="flex gap-2">
            {demoUrl && (
              <a 
                className="text-slate-400 hover:text-blue-400 transition-colors" 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
              >
                <span className="material-symbols-outlined text-[20px]">open_in_new</span>
              </a>
            )}
            {codeUrl && (
              <a 
                className="text-slate-400 hover:text-blue-400 transition-colors" 
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              text={tag} 
              variant={index === 0 ? 'primary' : 'secondary'} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  demoUrl: PropTypes.string,
  codeUrl: PropTypes.string,
};

export default ProjectCard;
