const styles = {
  Container: () => ({
    '&.MuiContainer-root': ({ palette }) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      height: '100vh',
      backgroundColor: palette.primary.main
    })
  }),
  FormCard: () => ({
    borderRadius: '10px',
    boxShadow:
      '0px 2px 1px 4px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 3px rgba(0,0,0,0.12)',
    padding: '25px'
  })
};

export default styles;
