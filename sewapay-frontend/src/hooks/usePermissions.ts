import { useAuth } from '@/contexts/AuthContext';

export const usePermissions = () => {
  const { user, hasPermission } = useAuth();
  return {
    permissions: user?.permissions || [],
    hasPermission,
  };
};
