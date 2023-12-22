const BUTTON_BASE_STYLES = {
  alignItems: 'center',
  borderRadius: '10px',
  boxShadow: 'none',
  display: 'flex',
  //fontSize is seemingly controlled by the `size` prop passed when instantiating a Button? sm = 13px, md = 14px, lg = 15px
  fontWeight: 500,
  letterSpacing: '0.02857em',
  lineHeight: '1.5rem',
  textTransform: 'uppercase'
};

const BUTTONS = [
  //applies to all buttons with size='small'
  {
    props: { size: 'small' },
    style: {
      ...BUTTON_BASE_STYLES,
      minHeight: '30px',
      //fontSize prop doesn't work as expected for MUI Icons and Icons seemingly don't inherit fontSize from the parent, so this allows us to scale the icon fontSize with the Button parent fontSize:
      //https://github.com/mui/material-ui/issues/25829 / https://github.com/mui/material-ui/issues/28917
      '& .MuiButton-iconSizeSmall > :nth-of-type(1)': {
        fontSize: '16px'
      }
    }
  },
  //applies to all buttons with size='medium'
  {
    props: { size: 'medium' },
    style: {
      ...BUTTON_BASE_STYLES,
      minHeight: '40px',
      '& .MuiButton-iconSizeMedium > :nth-of-type(1)': {
        fontSize: '17px'
      }
    }
  },
  //applies to all buttons with size='large'
  {
    props: { size: 'large' },
    style: {
      ...BUTTON_BASE_STYLES,
      minHeight: '56px',
      lineHeight: '1.625rem',
      '& .MuiButton-iconSizeLarge > :nth-of-type(1)': {
        fontSize: '18px'
      }
    }
  }
];

export default BUTTONS;
