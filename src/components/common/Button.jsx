import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  ...props 
}) => {
  // Base styles
  const baseStyles = 'flex items-center justify-center rounded-lg font-bold transition-all';
  
  // Variant styles
  const variants = {
    primary: 'bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20',
    secondary: 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-transparent dark:border-slate-700',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
  };

  // Size styles
  const sizes = {
    small: 'h-9 px-4 text-sm',
    medium: 'h-12 px-6 text-base',
    large: 'h-14 px-8 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined text-sm mr-2">{icon}</span>
      )}
      <span className="truncate">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined text-sm ml-2">{icon}</span>
      )}
    </>
  );

  // Render as link if href provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
