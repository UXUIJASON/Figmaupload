import React, { useState } from 'react';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';

export default function App() {
  // Simple routing state for demonstration
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignUp onNavigate={setCurrentPage} />;
      case 'forgot-password':
        return <ForgotPassword onNavigate={setCurrentPage} />;
      default:
        return <Login onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}
