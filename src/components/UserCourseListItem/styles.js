const styles = {
  Card: () => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '24px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    minHeight: '220px',
  }),
  CardContent: () => ({
    '&.MuiCardContent-root': {
      padding: '0px 0px 0px 16px',
    },
  }),
  CardLogo: ({ breakpoints }) => ({
    'height': '40px',
    'width': '40px',
    [breakpoints.up('md')]: {
      height: '50px',
      width: '50px',
    },
    [breakpoints.up('xl')]: {
      height: '60px',
      width: '60px',
    },
    '&.MuiCardMedia-root': {
      backgroundSize: 'contain',
    },
  }),
  CourseName: () => ({
    fontSize: '1.1rem',
  }),
};

export default styles;
