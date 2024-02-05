import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import UserCoursesList from './index';

describe('UserCoursesList', () => {
  it('renders without crashing', () => {
    const mockUserCourses = [
      {
        Bootcamp: 'Thinkful',
        Course: 'Test Course',
        CourseId: 123
      }
    ];

    render(
      <Router>
        <UserCoursesList
          toggleCourseDetailsModal={() => {}}
          toggleDeleteSuccessAlert={() => {}}
          userCourses={mockUserCourses}
        />
      </Router>
    );

    cleanup();
  });
});
