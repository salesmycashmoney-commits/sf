import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export const Logout: React.FC = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    // Redirect logic here
  }, [logout]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary-500 mb-2">Logged Out</h2>
        <p className="text-gray-600">You have been logged out.</p>
      </div>
    </div>
  );
};
