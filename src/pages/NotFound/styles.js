const styles = {
  Container: () => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  }),
  Content: () => ({
    width: '100%'
  }),
  ContentWrapper: ({ breakpoints }) => ({
    '&.MuiStack-root': {
      width: '100%',
      [breakpoints.up('sm')]: {
        width: '525px'
      }
    }
  }),
  Cta: () => ({
    width: '150px',
    height: '55px',
    borderRadius: '25px',
    fontWeight: '700'
  }),
  CtaWrapper: () => ({
    width: '100%'
  })
};

export default styles;
