import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import UserCourseDetails from './index';

describe('UserCourseDetails', () => {
  it('renders without crashing', () => {
    const mockCurrentUserCourse = {
      Course: {
        bootcamp: 'Test Bootcamp',
        id: 123,
        is_online: true,
        name: 'Test Course',
        pair_programming: true,
        prior_experience: false,
        solo_instruction: true
      },
      Languages: ['CSS', 'HTML', 'JavaScript'],
      PaymentSummary: {
        financing: true,
        isa: true,
        placement_based: true,
        repayment_guarantee: true,
        up_front: 20000
      },
      Schedule: {
        duration: 24,
        hours: 60,
        id: 3,
        type: 'full_time'
      }
    };

    render(
      <Router>
        <UserCourseDetails
          currentCourse={mockCurrentUserCourse}
          handleClose={() => {}}
          open={false}
        />
      </Router>
    );

    cleanup();
  });
});
