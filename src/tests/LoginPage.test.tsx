import { render, screen } from './helpers';
import { LoginPage } from '../pages';
import { fireEvent } from '@testing-library/react';
import { Api } from '../helpers';
import { act } from 'react-dom/test-utils';

describe('Login Page', () => {
  it('Renders correctly', async () => {
    render(<LoginPage />);
    await screen.findByText('Welcome Back!');
  });
  it('Displays errors', async () => {
    render(<LoginPage />);

    await act(async () => {
      const submitButton = await screen.findByTestId('submit');
      fireEvent.click(submitButton);
    });

    await screen.findByText('Login is required');
    await screen.findByText('Password is required');
  });

  it('Calls Api', async () => {
    const spy = jest.spyOn(Api, 'post');
    render(<LoginPage />);

    await act(async () => {
      const loginInput = await screen.findByTestId('login');
      fireEvent.change(loginInput, {
        target: {
          value: 'test_login',
        },
      });
    });

    await act(async () => {
      const passwordInput = await screen.findByTestId('password');
      fireEvent.change(passwordInput, {
        target: {
          value: 'test_password',
        },
      });
    });

    await act(async () => {
      const submitButton = await screen.findByTestId('submit');
      fireEvent.click(submitButton);
    });

    expect(spy).toHaveBeenCalledWith('/login', {
      login: 'test_login',
      password: 'test_password'
    });
  });
});
