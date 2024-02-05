import { RecoilRoot } from 'recoil';
import { cleanup, render } from '@testing-library/react';
import { Alert } from './index';

describe('Alert', () => {
  it('renders without crashing', () => {
    render(
      <RecoilRoot>
        <Alert />
      </RecoilRoot>
    );

    cleanup();
  });
});
