import { render as _render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../helpers';
import React from 'react';

export { screen } from '@testing-library/react';
export const render = (element: React.ReactElement) => {
  return _render(
    <MemoryRouter>
      <AuthProvider>
        {element}
      </AuthProvider>
    </MemoryRouter>,
  );
};
