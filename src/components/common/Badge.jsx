import PropTypes from 'prop-types';

const Badge = ({ 
  text, 
  variant = 'secondary',
  size = 'medium',
  className = '' 
}) => {
  // Variant styles
  const variants = {
    primary: 'bg-blue-400/10 text-blue-400 border border-blue-400/20',
    secondary: 'bg-slate-700 text-slate-300',
    success: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800',
    warning: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800',
    error: 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800',
  };

  // Size styles
  const sizes = {
    small: 'px-2 py-0.5 text-[10px]',
    medium: 'px-2 py-1 text-xs',
    large: 'px-3 py-1.5 text-sm',
  };

  return (
    <span 
      className={`font-medium rounded-md ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Badge;
