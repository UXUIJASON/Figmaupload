import React from 'react';
import { authIcons } from '../auth/AuthIcons';

interface SocialButtonProps {
  provider: 'google' | 'facebook';
  onClick?: () => void;
}

export function SocialButton({ provider, onClick }: SocialButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex-1 h-[42px] border border-[#e4ebf0] rounded-[8px] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
    >
      {provider === 'google' ? authIcons.google : authIcons.facebook}
      <span className="text-[14px] font-semibold text-[#111c2d] capitalize">
        {provider}
      </span>
    </button>
  );
}
