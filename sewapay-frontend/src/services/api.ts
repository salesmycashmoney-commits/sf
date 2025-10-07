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
