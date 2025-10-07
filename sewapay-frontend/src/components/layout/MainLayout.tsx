import React from 'react';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <header className="bg-primary-500 text-white p-4 shadow">
      <h1 className="text-xl font-bold">SEWAPAY FINTECH</h1>
    </header>
    <main className="flex-1 p-6">{children}</main>
    <footer className="bg-gray-200 text-center p-2 text-xs text-gray-600">
      &copy; {new Date().getFullYear()} SEWAPAY FINTECH PRIVATE LIMITED
    </footer>
  </div>
);
