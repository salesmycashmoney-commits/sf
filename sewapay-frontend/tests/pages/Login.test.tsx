import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '@/pages/Login';

describe('Login', () => {
  it('renders Login heading', () => {
    render(<Login />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it('shows error on failed login', async () => {
    render(<Login />);
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    expect(await screen.findByText(/Login failed/i)).toBeInTheDocument();
  });
});
