const styles = {
  CtaWrapper: ({ breakpoints }) => ({
    '&.MuiGrid-item': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      [breakpoints.up('sm')]: {
        justifyContent: 'flex-start'
      }
    }
  }),
  GridItem: () => ({
    '&.MuiGrid-item': {
      paddingBottom: '1.5rem'
    }
  }),
  SearchBtn: () => ({
    borderRadius: '25px',
    fontWeight: 700,
    height: '55px',
    width: '150px'
  })
};

export default styles;
