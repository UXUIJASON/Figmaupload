import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { authIcons } from '../components/auth/AuthIcons';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { SocialButton } from '../components/auth/SocialButton';

interface LoginProps {
  onNavigate: (page: string) => void;
}

export function Login({ onNavigate }: LoginProps) {
  return (
    <AuthLayout>
      {authIcons.logo}
      
      <div className="flex flex-col gap-2">
        <h1 className="text-[21px] font-semibold text-[#111c2d]">Sign In</h1>
        <p className="text-[16px] text-[#111c2d]/60">Your Admin Dashboard</p>
      </div>

      <div className="flex gap-[30px] w-full">
        <SocialButton provider="google" />
        <SocialButton provider="facebook" />
      </div>

      <div className="flex items-center gap-3 w-full">
        <div className="h-px bg-[#e4ebf0] flex-1" />
        <span className="text-[14px] text-[#111c2d]/60">or sign in with</span>
        <div className="h-px bg-[#e4ebf0] flex-1" />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Input label="Username" placeholder="Enter your username" />
        <div className="flex flex-col gap-4">
          <Input label="Password" type="password" placeholder="Enter password" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {authIcons.checkboxUnchecked}
              <span className="text-[14px] text-[#111c2d]/60">Remember this device</span>
            </div>
            <button 
              onClick={() => onNavigate('forgot-password')}
              className="text-[14px] font-semibold text-[#00a1ff] hover:underline"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>

      <Button fullWidth onClick={() => onNavigate('dashboard')}>Sign In</Button>

      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="text-[14px] text-[#111c2d]/60">New to MaterialM3?</span>
        <button 
          onClick={() => onNavigate('signup')}
          className="text-[14px] font-semibold text-[#00a1ff] hover:underline"
        >
          Create an account
        </button>
      </div>
    </AuthLayout>
  );
}
