import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import SearchForm from './index';

describe('SearchForm', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <SearchForm handleDisplayResults={() => {}} />
      </Router>
    );

    cleanup();
  });
});
