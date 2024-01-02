const styles = {
  Container: () => ({
    '&.MuiContainer-root': ({ breakpoints }) => ({
      display: 'flex',
      paddingTop: '64px',
      paddingBottom: '64px',
      [breakpoints.up('sm')]: {
        paddingLeft: '64px',
        paddingRight: '64px'
      },
      [breakpoints.up('md')]: {
        paddingLeft: '180px',
        paddingRight: '180px'
      },
      [breakpoints.up('lg')]: {
        padding: '100px 64px'
      },
      [breakpoints.up('1440')]: {
        padding: '100px 240px 64px 128px'
      }
    })
  })
};

export default styles;
