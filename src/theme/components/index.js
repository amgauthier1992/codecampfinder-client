import BUTTONS from './buttons';

const components = {
  MuiButton: {
    variants: BUTTONS
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        width: '100%'
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        height: '48px',
        backgroundColor: 'rgba(200, 200, 200, 0.1)'
      }
    }
  }
};

export default components;
