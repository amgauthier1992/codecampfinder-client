import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import LoginForm from './index';

describe('LoginForm', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );
  });

  cleanup();
});
