import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password, role);
      setError('');
      // Redirect logic here
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-primary-500">Login</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        >
          <option value="Super Admin">Super Admin</option>
          <option value="Admin">Admin</option>
          <option value="Whitelabel">Whitelabel</option>
          <option value="B2C Admin">B2C Admin</option>
          <option value="Distributor">Distributor</option>
          <option value="Retailer">Retailer</option>
        </select>
        <button type="submit" className="w-full bg-primary-500 text-white py-2 rounded font-bold">
          Login
        </button>
      </form>
    </div>
  );
};
