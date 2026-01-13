import PropTypes from 'prop-types';

const TimelineItem = ({ 
  year, 
  title, 
  company, 
  description, 
  isCurrent = false 
}) => {
  return (
    <div className="relative pl-8 md:pl-12 group">
      {/* Timeline Dot */}
      <div 
        className={`absolute -left-[5px] top-2 h-3 w-3 rounded-full ring-4 ring-[#f6f7f8] dark:ring-background-dark group-hover:scale-125 transition-transform duration-300 ${
          isCurrent 
            ? 'bg-blue-400' 
            : 'bg-slate-400 dark:bg-slate-600 group-hover:bg-blue-400'
        }`}
      ></div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <span 
          className={`font-mono text-sm font-bold ${
            isCurrent 
              ? 'text-blue-400' 
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          {year}
        </span>
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>
        <span className="text-slate-500 text-sm font-medium mb-2">
          {company}
        </span>
        <p className="text-slate-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool,
};

export default TimelineItem;
