const styles = {
  // Backdrop: () => ({
  //   color: '#fff',
  //   zIndex: 100
  // }),
  Container: () => ({
    '&.MuiContainer-root': ({ palette }) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      height: '100vh',
      backgroundColor: palette.primary.main
    })
  }),
  // GridItem: () => ({
  //   '&.MuiGrid-item': {
  //     paddingLeft: '0 !important'
  //   }
  // }),
  FormCard: () => ({
    borderRadius: '10px',
    boxShadow:
      '0px 2px 1px 4px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 3px rgba(0,0,0,0.12)',
    padding: '25px'
  })
  // LoginBtn: () => ({
  //   display: 'block',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   borderRadius: '25px',
  //   fontWeight: 700,
  //   height: '55px',
  //   width: '150px'
  // }),
  // LogoIcon: ({ palette }) => ({
  //   animation: 'rotateAnimation 5s linear infinite',
  //   '@keyframes rotateAnimation': {
  //     from: { transform: 'rotate(0deg)' },
  //     to: { transform: 'rotate(360deg)' }
  //   },
  //   color: palette.primary.main,
  //   display: 'block',
  //   fontSize: '4em',
  //   marginLeft: 'auto',
  //   marginRight: 'auto'
  // }),
  // LoginForm: ({ breakpoints }) => ({
  //   width: '100%',
  //   margin: 0,
  //   [breakpoints.up('sm')]: {
  //     width: '350px'
  //   }
  // }),
  // LoginFormCtas: () => ({
  //   marginLeft: 'auto',
  //   marginRight: 'auto'
  // })
};

export default styles;
