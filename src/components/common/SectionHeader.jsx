import PropTypes from 'prop-types';

const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>
      <div className="w-20 h-1 bg-blue-400 rounded-full"></div>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
};

export default SectionHeader;
