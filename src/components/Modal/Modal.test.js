import { cleanup, render } from '@testing-library/react';
import Modal from './index';

describe('RadioGroup input', () => {
  it('renders without crashing', () => {
    render(
      <Modal
        handlePrimaryAction={() => {}}
        handleSecondaryAction={() => {}}
        hasSecondaryCta
        open={true}
        onClose={() => {}}
        primaryBtnTitle='Test'
        secondaryBtnTitle='Test'
        primaryBtnColor='error'
        secondaryBtnColor='primary'
        primaryBtnVariant='contained'
        secondaryBtnVariant='outlined'
      >
        <div />
      </Modal>
    );

    cleanup();
  });
});
