const styles = {
  Backdrop: () => ({
    backdropFilter: 'blur(2px)'
  }),
  CloseButtonWrapper: () => ({
    display: 'flex',
    flexDirection: 'row-reverse'
  }),
  CloseIcon: () => ({
    height: '20px',
    width: '20px'
  }),
  IconButton: () => ({
    position: 'relative',
    left: '10px'
  }),
  ModalBox: ({ palette, breakpoints }) => ({
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'backgroundColor': palette.common.white,
    'borderRadius': '16px',
    'boxShadow': '0px 4px 20px rgba(0, 16, 101, 0.27)',
    'padding': '12px 24px 24px 24px',
    '&:focus': {
      outline: 'none'
    },
    'width': '100%',
    'max-height': '100%',
    'overflowY': 'auto',
    [breakpoints.up('sm')]: {
      width: '85%'
    },
    [breakpoints.up('md')]: {
      width: '70%',
      height: 'auto'
    },
    [breakpoints.up('lg')]: {
      width: '65%'
    },
    [breakpoints.up('1400')]: {
      width: '671px'
    }
  }),
  ModalContent: () => ({
    '& .MuiTypography-root': {
      textAlign: 'center'
    }
  }),
  ModalControls: () => ({
    'paddingTop': '1.5rem',
    '& .MuiButtonBase-root': {
      minHeight: '48px',
      flex: 1
    }
  })
};

export default styles;
