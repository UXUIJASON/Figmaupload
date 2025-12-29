import React from 'react';
import { UserModal, userAvatarUrl } from './UserModal';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface UserMenuProps {
  className?: string;
}

export function UserMenu({ className }: UserMenuProps) {
  const handleLogout = () => {
    alert("로그아웃 되었습니다.");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className={`relative outline-none rounded-full transition-transform active:scale-95 ${className}`}>
          <img 
            src={userAvatarUrl} 
            alt="User Profile" 
            className="w-[40px] h-[40px] rounded-full object-cover border border-[#E4EBF0] hover:border-[#FF6692] transition-colors"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0 border-none bg-transparent shadow-none" 
        align="end" 
        sideOffset={10}
      >
        <UserModal onLogout={handleLogout} />
      </PopoverContent>
    </Popover>
  );
}
