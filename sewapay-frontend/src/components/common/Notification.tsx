import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const notify = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
  }
};

export const NotificationProvider: React.FC = () => <Toaster position="top-right" />;
