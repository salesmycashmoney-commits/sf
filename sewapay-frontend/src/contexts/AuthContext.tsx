import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

function getPermissionsByRole(role: string): string[] {
  switch (role) {
    case 'Super Admin':
      return ['manage_admins', 'view_reports', 'manage_whitelabels', 'manage_b2c', 'manage_distributors', 'manage_retailers'];
    case 'Admin':
      return ['view_reports', 'manage_b2c', 'manage_distributors', 'manage_retailers'];
    case 'Whitelabel':
      return ['view_reports', 'manage_b2c', 'manage_distributors', 'manage_retailers'];
    case 'B2C Admin':
      return ['view_reports', 'manage_customers'];
    case 'Distributor':
      return ['view_reports', 'manage_retailers'];
    case 'Retailer':
      return ['view_reports'];
    default:
      return [];
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('sewapay_token');
    const userData = localStorage.getItem('sewapay_user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: string) => {
    // Mock authentication - replace with actual API call
    const mockUser: User = {
      id: '1',
      name: 'Admin User',
      email,
      role,
      permissions: getPermissionsByRole(role),
    };
    localStorage.setItem('sewapay_token', 'mock-jwt-token');
    localStorage.setItem('sewapay_user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem('sewapay_token');
    localStorage.removeItem('sewapay_user');
    setUser(null);
  };

  const hasPermission = (permission: string) => {
    return user?.permissions.includes(permission) || false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        hasPermission,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
