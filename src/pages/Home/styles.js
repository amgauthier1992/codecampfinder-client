const styles = {
  ContentPreface: ({ breakpoints }) => ({
    width: '100%',
    [breakpoints.up('sm')]: {
      width: '75%'
    },
    [breakpoints.between('sm', 'md')]: {
      width: '50%'
    },
    [breakpoints.up('md')]: {
      width: '40%'
    },
    [breakpoints.up('lg')]: {
      width: '33%'
    },
    [breakpoints.up('xl')]: {
      width: '25%'
    }
  }),
  ContentTitle: ({ breakpoints }) => ({
    fontSize: '2rem',
    width: '100%',
    [breakpoints.between('375', 'sm')]: {
      width: '300px'
    },
    [breakpoints.up('sm')]: {
      width: '300px'
    },
    [breakpoints.up('lg')]: {
      fontSize: '2.25rem'
    }
  }),
  ContentWrapper: ({ breakpoints }) => ({
    '&.MuiStack-root': {
      marginLeft: '2rem',
      marginRight: '2rem',
      marginTop: '2rem',
      marginBottom: '2rem',
      [breakpoints.up('lg')]: {
        marginLeft: '4rem'
      }
    }
  }),
  Cta: () => ({
    borderRadius: '25px',
    fontWeight: 700,
    height: '55px',
    width: '150px'
  }),
  MiddleWell: ({ breakpoints }) => ({
    backgroundImage: `url("${process.env.PUBLIC_URL}/codecamp-opaque.png")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 56px - 56px)',
    [breakpoints.up('sm')]: {
      minHeight: 'calc(100vh - 64px - 56px)'
    },
    [breakpoints.up('md')]: {
      backgroundImage: `url("${process.env.PUBLIC_URL}/codecamp.jpg")`
    }
  })
};

export default styles;
