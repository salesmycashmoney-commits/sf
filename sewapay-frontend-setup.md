# SEWAPAY FINTECH PRIVATE LIMITED - Frontend Repository Setup Guide

## Project Overview

SEWAPAY is an advanced fintech multi-portal platform with a 4-tier administrative hierarchy supporting Super Admin, Admin, Whitelabel, and B2C Admin portals, along with Distributor and Retailer interfaces. This frontend repository contains the React-based user interface with role-based access control and comprehensive fintech service integrations.

## Technology Stack

### Core Technologies
- **React 18** with TypeScript for type safety and modern features
- **Tailwind CSS** for responsive, utility-first styling
- **React Router v6** for navigation and protected routes
- **Context API** for state management across components
- **Chart.js** for advanced data visualization and analytics

### Additional Libraries
- **Axios** for API communication
- **React Hook Form** for form handling and validation
- **React Query** for server state management and caching
- **Framer Motion** for smooth animations and transitions
- **React Hot Toast** for notification system
- **Date-fns** for date manipulation and formatting

## Repository Structure

```
sewapay-frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI components
│   │   ├── auth/            # Authentication components
│   │   ├── dashboard/       # Role-specific dashboards
│   │   ├── services/        # Service integration components
│   │   ├── users/           # User management components
│   │   ├── customers/       # B2C customer management
│   │   └── layout/          # Layout components
│   ├── contexts/            # React contexts
│   ├── hooks/               # Custom hooks
│   ├── pages/               # Page components
│   ├── services/            # API services
│   ├── types/               # TypeScript definitions
│   ├── utils/               # Utility functions
│   ├── constants/           # Application constants
│   └── assets/              # Static assets
├── tests/
│   ├── __mocks__/           # Test mocks
│   ├── components/          # Component tests
│   ├── hooks/               # Hook tests
│   ├── pages/               # Page tests
│   └── utils/               # Utility tests
├── playwright/
│   ├── tests/               # E2E tests
│   ├── fixtures/            # Test fixtures
│   └── utils/               # Test utilities
├── docs/                    # Documentation
├── .env.example             # Environment variables template
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── playwright.config.ts    # Playwright configuration
└── README.md               # Project documentation
```

## Initial Setup

### 1. Create Repository and Clone

```bash
# Create repository on GitHub: sewapay-frontend
git clone https://github.com/YOUR_ORG/sewapay-frontend.git
cd sewapay-frontend
```

### 2. Initialize React Project with Vite

```bash
# Create React app with Vite and TypeScript
npm create vite@latest . -- --template react-ts
npm install

# Install additional dependencies
npm install \
  react-router-dom \
  @types/react-router-dom \
  tailwindcss \
  postcss \
  autoprefixer \
  chart.js \
  react-chartjs-2 \
  axios \
  react-hook-form \
  @hookform/resolvers \
  yup \
  react-query \
  framer-motion \
  react-hot-toast \
  date-fns \
  clsx \
  lucide-react
```

### 3. Development Dependencies

```bash
npm install -D \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  @playwright/test \
  @types/node \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  prettier \
  vite-tsconfig-paths \
  @vitejs/plugin-react
```

## Configuration Files

### 1. Package.json Scripts

```json
{
  "name": "sewapay-frontend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit"
  }
}
```

### 2. Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'build',
    sourcemap: true
  },
  define: {
    global: 'globalThis',
  },
})
```

### 3. Tailwind Configuration

```bash
npx tailwindcss init -p
```

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        sewapay: {
          blue: '#1e40af',
          green: '#059669',
          purple: '#7c3aed',
          orange: '#ea580c',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### 4. TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/services/*": ["./src/services/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/types/*": ["./src/types/*"],
      "@/contexts/*": ["./src/contexts/*"],
      "@/constants/*": ["./src/constants/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Core Application Structure

### 1. Authentication Context

```typescript
// src/contexts/AuthContext.tsx
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

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
```

### 2. Protected Route Component

```typescript
// src/components/common/ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
  fallback?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredPermissions = [],
  fallback,
}) => {
  const { isAuthenticated, hasPermission } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredPermissions.length > 0) {
    const hasRequiredPermission = requiredPermissions.some(permission =>
      hasPermission(permission)
    );

    if (!hasRequiredPermission) {
      return (
        fallback || (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Access Denied
              </h2>
              <p className="text-gray-600">
                You don't have permission to access this page.
              </p>
            </div>
          </div>
        )
      );
    }
  }

  return <>{children}</>;
};
```

### 3. API Service Configuration

```typescript
// src/services/api.ts
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('sewapay_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('sewapay_token');
      localStorage.removeItem('sewapay_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Service functions
export const authService = {
  login: async (email: string, password: string, role: string) => {
    const response = await api.post('/auth/login', { email, password, role });
    return response.data;
  },
  
  logout: async () => {
    await api.post('/auth/logout');
  },
  
  refreshToken: async () => {
    const response = await api.post('/auth/refresh');
    return response.data;
  },
};

export const userService = {
  getUsers: async (params?: any) => {
    const response = await api.get('/users', { params });
    return response.data;
  },
  
  createUser: async (userData: any) => {
    const response = await api.post('/users', userData);
    return response.data;
  },
  
  updateUser: async (id: string, userData: any) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },
  
  deleteUser: async (id: string) => {
    await api.delete(`/users/${id}`);
  },
};

export const transactionService = {
  getTransactions: async (params?: any) => {
    const response = await api.get('/transactions', { params });
    return response.data;
  },
  
  processTransaction: async (transactionData: any) => {
    const response = await api.post('/transactions', transactionData);
    return response.data;
  },
};

export const serviceProviderAPI = {
  mobileRecharge: async (data: any) => {
    const response = await api.post('/services/mobile-recharge', data);
    return response.data;
  },
  
  bbpsPayment: async (data: any) => {
    const response = await api.post('/services/bbps', data);
    return response.data;
  },
  
  aepsTransaction: async (data: any) => {
    const response = await api.post('/services/aeps', data);
    return response.data;
  },
  
  dmtTransfer: async (data: any) => {
    const response = await api.post('/services/dmt', data);
    return response.data;
  },
};
```

### 4. Role-Based Dashboard Router

```typescript
// src/components/dashboard/DashboardRouter.tsx
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
```

## Environment Configuration

### 1. Environment Variables

```bash
# .env.example
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api
VITE_API_TIMEOUT=10000

# App Configuration
VITE_APP_NAME=SEWAPAY FINTECH
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=development

# External Service URLs (for frontend integration)
VITE_SUPPORT_EMAIL=support@sewapay.com
VITE_SUPPORT_PHONE=+91-800-123-4567

# Analytics (optional)
VITE_GOOGLE_ANALYTICS_ID=
VITE_SENTRY_DSN=

# Feature Flags
VITE_FEATURE_CHAT_SUPPORT=true
VITE_FEATURE_NOTIFICATIONS=true
VITE_FEATURE_DARK_MODE=false
```

### 2. ESLint Configuration

```json
{
  "env": {
    "browser": true,
    "es2020": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "ignorePatterns": ["dist", ".eslintrc.cjs"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["react-refresh"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}
```

### 3. Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

## Testing Configuration

### 1. Playwright E2E Tests

```bash
npx playwright install
```

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### 2. Component Testing Setup

```typescript
// src/setupTests.ts
import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());
```

## Build and Deployment

### 1. Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### 2. Docker Configuration

```dockerfile
# Dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 3. Nginx Configuration

```nginx
# nginx.conf
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        location /api {
            proxy_pass http://backend:5000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
}
```

## Development Workflow

### 1. Daily Development

```bash
# Start development server
npm run dev

# Run tests in watch mode
npm run test

# Run linting
npm run lint

# Format code
npm run format
```

### 2. Pre-commit Hooks

```json
// package.json (add to devDependencies)
"husky": "^8.0.3",
"lint-staged": "^13.2.3"
```

```bash
# Install husky
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

```json
// package.json (add lint-staged config)
"lint-staged": {
  "*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,css,md}": [
    "prettier --write"
  ]
}
```

## Deployment Strategies

### 1. Vercel Deployment

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 2. Netlify Deployment

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. AWS S3 + CloudFront

```bash
# Build and deploy script
#!/bin/bash
npm run build
aws s3 sync build/ s3://sewapay-frontend-bucket --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Performance Optimization

### 1. Code Splitting

```typescript
// Lazy load components
import { lazy, Suspense } from 'react';

const SuperAdminDashboard = lazy(() => import('./SuperAdminDashboard'));
const AdminDashboard = lazy(() => import('./AdminDashboard'));

// Use with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <SuperAdminDashboard />
</Suspense>
```

### 2. Bundle Analysis

```bash
# Install bundle analyzer
npm install -D rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'build/bundle-analysis.html',
      open: true
    })
  ]
});
```

## Security Best Practices

### 1. Content Security Policy

```html
<!-- In index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https:;">
```

### 2. Environment Variable Validation

```typescript
// src/utils/env.ts
const requiredEnvVars = [
  'VITE_API_BASE_URL',
] as const;

export const validateEnv = () => {
  const missing = requiredEnvVars.filter(
    (envVar) => !import.meta.env[envVar]
  );

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
};
```

This comprehensive frontend setup provides a solid foundation for the SEWAPAY fintech platform with proper role-based access control, modern development practices, and production-ready configuration.