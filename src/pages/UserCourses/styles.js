const styles = {
  AfterWord: ({ breakpoints }) => ({
    marginTop: '1rem',
    width: '100%',
    [breakpoints.up('lg')]: {
      width: '80%'
    },
    [breakpoints.up('1440')]: {
      width: '70%'
    }
  }),
  CourseListHeader: () => ({
    marginTop: '2rem',
    marginBottom: '2rem'
  }),
  Foreword: ({ breakpoints }) => ({
    marginTop: '2rem',
    width: '100%',
    [breakpoints.up('lg')]: {
      width: '80%'
    },
    [breakpoints.up('1440')]: {
      width: '75%'
    }
  })
};

export default styles;
