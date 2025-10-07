import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav className="bg-primary-500 text-white px-4 py-2 flex gap-4 items-center">
    <Link to="/" className="font-bold">Dashboard</Link>
    <Link to="/users">Users</Link>
    <Link to="/customers">Customers</Link>
    <Link to="/reports">Reports</Link>
    <Link to="/analytics">Analytics</Link>
    <Link to="/services">Services</Link>
    <Link to="/logout" className="ml-auto">Logout</Link>
  </nav>
);
