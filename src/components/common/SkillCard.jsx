import PropTypes from 'prop-types';

const SkillCard = ({ name, icon, iconColor = 'text-primary' }) => {
  return (
    <div className="group flex flex-col items-center justify-center p-6 bg-[#1c232b] rounded-xl border border-slate-800 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300">
      <span 
        className={`material-symbols-outlined text-6xl ${iconColor} mb-3 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </span>
      <span className="font-semibold text-white text-sm">{name}</span>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
};

export default SkillCard;
