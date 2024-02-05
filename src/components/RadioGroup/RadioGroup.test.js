import { cleanup, render } from '@testing-library/react';
import { YES_NO } from '../../static-info';
import RadioGroup from './index';

describe('RadioGroup input', () => {
  it('renders without crashing', () => {
    render(
      <RadioGroup
        value={false}
        onChange={() => {}}
        options={YES_NO}
      />
    );

    cleanup();
  });
});
