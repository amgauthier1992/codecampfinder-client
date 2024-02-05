import { cleanup, render } from '@testing-library/react';
import Snackbar from './index';

describe('Snackbar', () => {
  it('renders without crashing', () => {
    render(
      <Snackbar
        message='Test message'
        open={true}
      />
    );

    cleanup();
  });
});
