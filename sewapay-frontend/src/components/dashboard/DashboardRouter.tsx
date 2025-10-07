import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { SuperAdminDashboard } from './SuperAdminDashboard';
import { AdminDashboard } from './AdminDashboard';
import { WhitelabelDashboard } from './WhitelabelDashboard';
import { B2CAdminDashboard } from './B2CAdminDashboard';
import { DistributorDashboard } from './DistributorDashboard';
import { RetailerDashboard } from './RetailerDashboard';

export const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  switch (user?.role) {
    case 'Super Admin':
      return <SuperAdminDashboard />;
    case 'Admin':
      return <AdminDashboard />;
    case 'Whitelabel':
      return <WhitelabelDashboard />;
    case 'B2C Admin':
      return <B2CAdminDashboard />;
    case 'Distributor':
      return <DistributorDashboard />;
    case 'Retailer':
      return <RetailerDashboard />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Invalid Role
            </h2>
            <p className="text-gray-600">
              Your account role is not recognized.
            </p>
          </div>
        </div>
      );
  }
};
