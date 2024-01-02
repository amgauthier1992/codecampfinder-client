const styles = {
  Backdrop: () => ({
    color: '#fff',
    zIndex: 100
  }),
  GridItem: () => ({
    '&.MuiGrid-item': {
      paddingLeft: 0
    }
  }),
  LogoIcon: ({ palette }) => ({
    animation: 'rotateAnimation 5s linear infinite',
    '@keyframes rotateAnimation': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' }
    },
    color: palette.primary.main,
    display: 'block',
    fontSize: '4em',
    marginLeft: 'auto',
    marginRight: 'auto'
  }),
  RegisterBtn: () => ({
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '25px',
    fontWeight: 700,
    height: '55px',
    width: '150px'
  }),
  RegisterCtas: () => ({
    marginLeft: 'auto',
    marginRight: 'auto'
  }),
  RegisterForm: ({ breakpoints }) => ({
    '&.MuiGrid-container': {
      width: '100%',
      maxHeight: '650px',
      marginLeft: '0px',
      [breakpoints.up('lg')]: {
        width: '50%',
        marginLeft: 'auto'
      },
      [breakpoints.up('1440')]: {
        width: '35%'
      }
    }
  })
};

export default styles;
