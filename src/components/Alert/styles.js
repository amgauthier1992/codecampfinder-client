const styles = {
  Content: ({ breakpoints }) => ({
    textAlign: 'center',
    [breakpoints.up('sm')]: {
      paddingLeft: 4,
      paddingRight: 4,
    },
  }),
  DialogPaper: ({ breakpoints }) => ({
    borderRadius: '12px',
    margin: '12px',
    [breakpoints.up('md')]: {
      margin: '32px',
    },
  }),
  DialogActions: {
    padding: '20px',
  },
  Title: {
    paddingTop: 2,
    textAlign: 'center',
  },
  TitleIcon: {
    'fontSize': '6rem',
    'lineHeight': 0,
    '> svg': {
      fontSize: 'inherit',
    },
  },
  Button: {
    lineHeight: 1,
    width: '100%',
  },
};

export default styles;
