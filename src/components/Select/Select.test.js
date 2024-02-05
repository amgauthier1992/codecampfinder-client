import { cleanup, render } from '@testing-library/react';
import { COURSE_SCHEDULE_OPTIONS } from '../../static-info';
import Select from './index';

describe('Select Input', () => {
  it('renders without crashing', () => {
    render(
      <Select
        error={false}
        options={COURSE_SCHEDULE_OPTIONS}
        onChange={() => {}}
        placeholder='Schedule'
        value='full_time'
      />
    );

    cleanup();
  });
});
