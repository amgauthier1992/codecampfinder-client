import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import SignUpForm from './index';

describe('SignUpForm', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <SignUpForm />
      </Router>
    );

    cleanup();
  });
});
