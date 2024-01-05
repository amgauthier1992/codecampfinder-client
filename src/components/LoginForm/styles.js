const styles = {
  Backdrop: () => ({
    color: '#fff',
    zIndex: 100,
  }),
  GridItem: () => ({
    '&.MuiGrid-item': {
      paddingLeft: '0 !important',
    },
  }),
  LoginBtn: () => ({
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '25px',
    fontWeight: 700,
    height: '55px',
    width: '150px',
  }),
  LogoIcon: ({ palette }) => ({
    'animation': 'rotateAnimation 5s linear infinite',
    '@keyframes rotateAnimation': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
    'color': palette.primary.main,
    'display': 'block',
    'fontSize': '4em',
    'marginLeft': 'auto',
    'marginRight': 'auto',
  }),
  LoginForm: ({ breakpoints }) => ({
    width: '100%',
    margin: 0,
    [breakpoints.up('sm')]: {
      width: '350px',
    },
  }),
  LoginFormCtas: () => ({
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
};

export default styles;
