import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { cleanup, render } from '@testing-library/react';
import OfferingCard from './index';

describe('OfferingCard', () => {
  it('renders without crashing', () => {
    const mockOffering = {
      Courses: [
        {
          Is_online: true,
          Languages: ['JavaScript'],
          Name: 'Test Course',
          Pair_programming: true,
          PaymentSummary: {
            Financing: true,
            Isa: false,
            Placement_based: false,
            Repayment_guarantee: false,
            Up_front: 15550
          },
          Prior_experience: false,
          Schedule: {
            Duration: 2,
            Hours: 40,
            Type: 'part_time'
          },
          Solo_instruction: false
        }
      ],
      Locations: [
        {
          city: 'Los Angeles',
          state: 'CA'
        }
      ],
      Name: 'Codesmith',
      Website: 'https://codesmith.io/'
    };

    render(
      <Router>
        <RecoilRoot>
          <OfferingCard
            offering={mockOffering}
            toggleSuccessAlert={() => {}}
          />
        </RecoilRoot>
      </Router>
    );

    cleanup();
  });
});
