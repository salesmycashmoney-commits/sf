import { render, screen } from '@testing-library/react';
import { UserList } from '../../components/users/UserList';

describe('UserList', () => {
  it('renders User Management heading', () => {
    render(<UserList />);
    expect(screen.getByText(/User Management/i)).toBeInTheDocument();
  });
});
