const styles = {
  ContentTitle: () => ({
    fontSize: '40px'
  }),
  ContentWrapper: ({ breakpoints }) => ({
    display: 'block',
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    paddingTop: '6rem',
    width: '288px',
    [breakpoints.up('sm')]: {
      width: '200px'
    },
    [breakpoints.up('768')]: {
      paddingTop: '11rem',
      width: '290px'
    },
    [breakpoints.up('md')]: {
      width: '340px !important' //This is being overriden w/o !important (?) Can't use exact px in combination with predefined breakpoints ('sm', 'md' etc.) MUI limitation?
    },
    [breakpoints.up('lg')]: {
      marginLeft: '6rem',
      width: '400px !important'
    }
  }),
  Cta: () => ({
    'borderRadius': '25px',
    'fontWeight': 700,
    'height': '55px',
    'width': '150px',
    '&.MuiButtonBase-root': { marginTop: '2rem' }
  }),
  Image: ({ breakpoints }) => ({
    opacity: 0.7,
    width: '90%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    marginLeft: 'auto',
    [breakpoints.up('600')]: {
      opacity: 1
    }
  }),
  ImgWrapper: ({ breakpoints }) => ({
    position: 'absolute',
    zIndex: -100,
    top: '56px',
    bottom: '56px',
    overflow: 'hidden',
    width: '100%',
    [breakpoints.up('sm')]: {
      top: '64px'
    }
  })
};

export default styles;
