import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { authIcons } from '../components/auth/AuthIcons';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { SocialButton } from '../components/auth/SocialButton';

interface SignUpProps {
  onNavigate: (page: string) => void;
}

export function SignUp({ onNavigate }: SignUpProps) {
  return (
    <AuthLayout>
      {authIcons.logo}
      
      <div className="flex flex-col gap-2">
        <h1 className="text-[21px] font-semibold text-[#111c2d]">Sign Up</h1>
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
        <Input label="Email address" type="email" placeholder="Enter your email" />
        <Input label="Password" type="password" placeholder="Create a password" />
      </div>

      <Button fullWidth>Sign Up</Button>

      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="text-[14px] text-[#111c2d]/60">Already have an Account?</span>
        <button 
          onClick={() => onNavigate('login')}
          className="text-[14px] font-semibold text-[#00a1ff] hover:underline"
        >
          Sign In
        </button>
      </div>
    </AuthLayout>
  );
}
