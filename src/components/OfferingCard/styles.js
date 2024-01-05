const styles = {
  AddCourseBtn: ({ breakpoints }) => ({
    '&.MuiButtonBase-root': {
      fontWeight: 700,
      width: '130px',
      marginTop: '1rem',
      marginBottom: '1rem',
      [breakpoints.up('xl')]: {
        marginTop: '0.75rem',
      },
    },
  }),
  Bootcamp: () => ({
    textDecoration: 'none',
  }),
  Card: ({ breakpoints }) => ({
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    marginBottom: '1rem',
    padding: '1rem',
    [breakpoints.up('lg')]: {
      margin: '16px 16px 16px 0px',
      minHeight: '350px',
      maxHeight: '350px',
      overflowY: 'auto',
    },
  }),
  CardContent: () => ({
    padding: '16px 0px 0px 0px',
  }),
  CardLogo: ({ breakpoints }) => ({
    height: '40px',
    width: '40px',
    [breakpoints.up('md')]: {
      height: '50px',
      width: '50px',
    },
    [breakpoints.up('xl')]: {
      height: '60px',
      width: '60px',
    },
  }),
  DetailWithIcon: () => ({
    display: 'flex',
    alignItems: 'center',
  }),
  DetailIcon: () => ({
    '&.MuiListItemIcon-root': {
      marginLeft: '5px',
    },
  }),
  GridItem: () => ({
    padding: '8px',
  }),
  GridItemHeader: () => ({
    paddingBottom: '8px',
  }),
  RepaymentGuarantee: () => ({
    display: 'flex',
    alignItems: 'flex-start',
  }),
};

export default styles;
