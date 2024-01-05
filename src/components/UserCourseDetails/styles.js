const styles = {
  ContentHeader: () => ({
    '&.MuiTypography-root': {
      textAlign: 'left',
      marginBottom: '1rem',
      textDecoration: 'underline'
    }
  }),
  GridItem: () => ({
    '&.MuiGrid-item': {
      paddingBottom: '1rem'
    }
  }),
  GridItemTop: () => ({
    '&.MuiGrid-item': {
      paddingTop: 0,
      paddingBottom: '1rem'
    }
  }),
  LineItem: () => ({
    '&.MuiTypography-root': {
      textAlign: 'left',
      marginBottom: '5px'
    }
  })
};

export default styles;
