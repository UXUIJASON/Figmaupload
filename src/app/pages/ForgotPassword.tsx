import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { authIcons } from '../components/auth/AuthIcons';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

interface ForgotPasswordProps {
  onNavigate: (page: string) => void;
}

export function ForgotPassword({ onNavigate }: ForgotPasswordProps) {
  return (
    <AuthLayout>
      {authIcons.logo}
      
      <div className="flex flex-col gap-3">
        <h1 className="text-[21px] font-semibold text-[#111c2d]">Forgot your password?</h1>
        <p className="text-[14px] text-[#111c2d]/60 leading-[1.4]">
          Please enter the email address associated with your account and We will email you a link to reset your password.
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <Input label="Email Address" type="email" placeholder="Enter your email" />
        
        <div className="flex flex-col gap-3">
          <Button fullWidth>Send reset password link</Button>
          <Button 
            fullWidth 
            variant="secondary" 
            onClick={() => onNavigate('login')}
          >
            Back to login page
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}
