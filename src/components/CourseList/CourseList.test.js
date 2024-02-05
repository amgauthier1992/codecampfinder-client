import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { cleanup, render } from '@testing-library/react';
import CourseList from './index';

describe('CourseList', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <RecoilRoot>
          <CourseList toggleSuccessAlert={() => {}} />
        </RecoilRoot>
      </Router>
    );

    cleanup();
  });
});
