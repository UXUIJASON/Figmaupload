import React from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="text-[14px] font-medium text-[#2a3547]">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          className={clsx(
            "w-full h-[42px] border border-[#e4ebf0] rounded-[8px] px-4 text-[14px] text-[#111c2d] placeholder:text-[#111c2d]/40 outline-none focus:border-[#00a1ff] transition-colors",
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
}
