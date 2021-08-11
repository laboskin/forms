import { render, screen } from './helpers';
import { SignupPage } from '../pages';
import { fireEvent } from '@testing-library/react';
import { Api } from '../helpers';
import { act } from 'react-dom/test-utils';

describe('Signup Page', () => {
  it('Renders correctly', async () => {
    render(<SignupPage />);
    await screen.findByText('Create Account');
  });
  it('Displays errors', async () => {
    render(<SignupPage />);

    await act(async () => {
      const submitButton = await screen.findByTestId('submit');
      fireEvent.click(submitButton);
    });

    await screen.findByText('Login is required');
    await screen.findByText('Email is required');
    await screen.findByText('Password is required');
  });

  it('Calls Api', async () => {
    const spy = jest.spyOn(Api, 'post');
    render(<SignupPage />);

    await act(async () => {
      const loginInput = await screen.findByTestId('login');
      fireEvent.change(loginInput, {
        target: {
          value: 'test_login',
        },
      });
    });

    await act(async () => {
      const emailInput = await screen.findByTestId('email');
      fireEvent.change(emailInput, {
        target: {
          value: 'test@email.com',
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

    expect(spy).toHaveBeenCalledWith('/register', {
      login: 'test_login',
      email: 'test@email.com',
      password: 'test_password'
    });
  });
});
