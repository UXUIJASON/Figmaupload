import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  fullWidth = false,
  ...props 
}: ButtonProps) {
  const baseStyles = "h-[48px] rounded-[8px] font-semibold text-[15px] flex items-center justify-center transition-colors px-5";
  
  const variants = {
    primary: "bg-[#00a1ff] text-white hover:bg-[#008fe0]",
    secondary: "bg-[#d9f1ff] text-[#00a1ff] hover:bg-[#cceeff]",
    outline: "border border-[#e4ebf0] text-[#111c2d] hover:bg-gray-50",
    ghost: "bg-transparent text-[#00a1ff] hover:bg-[#f0f9ff]"
  };

  return (
    <button 
      className={clsx(
        baseStyles, 
        variants[variant], 
        fullWidth ? "w-full" : "", 
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
