import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../../pages/Login';
import { AuthProvider } from '../../contexts/AuthContext';

describe('Login', () => {
  it('renders Login heading', () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    // Use getByRole for heading to avoid ambiguity
    expect(screen.getByRole('heading', { name: /Login/i })).toBeInTheDocument();
  });

  it('shows error on failed login', async () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    // Fill in form fields with invalid credentials
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Admin' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    // Wait for error message to appear
    expect(await screen.findByText('Login failed')).toBeInTheDocument();
  });
});
