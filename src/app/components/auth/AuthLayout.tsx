import React from 'react';
import { clsx } from 'clsx';
import { authIcons } from './AuthIcons';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function Banner() {
  return (
    <div className="relative hidden w-[50%] lg:flex items-center justify-center bg-[#111c2d] overflow-hidden">
      {/* Background Circle */}
      <div className="absolute top-0 left-0 w-[823px] h-[1080px] pointer-events-none">
         <div className="absolute border-[#182943] border-[120px] rounded-full w-[700px] h-[700px] -left-[100px] -top-[100px]" />
      </div>

      {/* Abstract Logo Graphic */}
      <div className="absolute -bottom-[50px] -right-[100px] opacity-100 scale-125">
        <svg width="450" height="327" viewBox="0 0 450 327" fill="none" className="block w-[450px] h-[326.25px]">
          <g>
            <path d={authIcons.bigLogoParts.part1} fill="#00A1FF" />
            <path d={authIcons.bigLogoParts.part2} fill="#00A1FF" opacity="0.25" />
            <path d={authIcons.bigLogoParts.part3} fill="#00A1FF" opacity="0.25" />
            <path d={authIcons.bigLogoParts.part4} fill="#00A1FF" />
            <path d={authIcons.bigLogoParts.part5} fill="#00A1FF" />
          </g>
        </svg>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start gap-4 max-w-[400px]">
        <h1 className="text-white text-[40px] font-semibold leading-[48px]">
          Welcome to<br />MaterialM
        </h1>
        <p className="text-white text-[16px] font-semibold leading-[1.4] opacity-75">
          MaterialM helps developers to build organized<br />
          and well coded dashboards full of beautiful and<br />
          rich modules.
        </p>
        <button className="mt-4 border border-[#00a1ff] bg-[#00a1ff] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#008fe0] transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-white font-sans">
      <Banner />
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-[362px] flex flex-col gap-6">
          {children}
        </div>
      </div>
    </div>
  );
}
