import React from 'react';
import { UserModal, userAvatarUrl } from '../components/user/UserModal';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-[#F4F7FE] flex flex-col">
      {/* Header */}
      <header className="bg-white h-[70px] border-b border-[#E4EBF0] flex items-center justify-between px-8 sticky top-0 z-50">
        <div className="flex items-center gap-4">
           {/* Placeholder Logo */}
           <div className="w-8 h-8 bg-[#00A1FF] rounded-lg flex items-center justify-center text-white font-bold">M</div>
           <h1 className="text-[18px] font-semibold text-[#111C2D]">Dashboard</h1>
        </div>

        <div className="flex items-center gap-6">
          {/* User Profile Trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm hover:ring-2 hover:ring-[#00A1FF] transition-all focus:outline-none cursor-pointer">
                <img 
                  src={userAvatarUrl} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent className="p-0 border-none bg-transparent shadow-none w-auto mr-4" align="end" sideOffset={8}>
              <UserModal onLogout={onLogout} />
            </PopoverContent>
          </Popover>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm h-[600px] flex items-center justify-center border border-[#E4EBF0]">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#111C2D] mb-4">Welcome back, Linup01!</h2>
              <p className="text-[#111C2D]/60 max-w-md mx-auto">
                Click the profile image in the top right corner to see the new modal implementation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
