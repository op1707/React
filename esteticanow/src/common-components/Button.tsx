import React from 'react';

export type ButtonVariant = 'success' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  onClick?: () => void;
  className?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'success',
  size = 'md',
  icon,
  onClick,
  className = '',
  width,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer';

  const variantClasses = {
    success: 'bg-green-600 hover:bg-green-700 text-white',
    outline: 'border border-[#E2E8F0] bg-white  text-[#1A1A1A]',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const widthClass = width ? `w-[${width}]` : '';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim();


  return (
    <button className={classes} onClick={onClick}>
      {icon && <span className="mr-2"><img src={icon} alt="icon" className="w-4 h-4" /></span>}
      {children}
    </button>
  );
};

export default Button;
