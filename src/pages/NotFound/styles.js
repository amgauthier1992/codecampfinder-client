const styles = {
  Container: () => ({
    paddingTop: '10rem',
  }),
  Content: ({ breakpoints }) => ({
    width: '100%',
    [breakpoints.up('md')]: {
      width: '750px',
    },
  }),
  Cta: () => ({
    width: '150px',
    height: '55px',
    borderRadius: '25px',
    fontWeight: '700',
  }),
  CtaWrapper: ({ breakpoints }) => ({
    display: 'flex',
    justifyContent: 'center',
    [breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
  }),
};

export default styles;
