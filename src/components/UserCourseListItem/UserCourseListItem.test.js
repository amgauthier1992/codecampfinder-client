import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import UserCourseListItem from './index';

describe('UserCourseListItem', () => {
  it('renders without crashing', () => {
    const mockUserCourse = {
      CourseId: 1,
      Bootcamp: 'Thinkful',
      Course: 'Full Stack Engineering Flex'
    };

    render(
      <Router>
        <UserCourseListItem
          toggleCourseDetailsModal={() => {}}
          toggleDeleteSuccessAlert={() => {}}
          userCourse={mockUserCourse}
        />
      </Router>
    );

    cleanup();
  });
});
