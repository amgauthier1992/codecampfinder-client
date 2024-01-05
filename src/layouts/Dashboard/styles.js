const styles = {
  AppBarDesktop: () => ({
    width: `calc(100% - 275px)`,
    marginLeft: '275px',
    boxShadow: 'none'
  }),
  CenterWellDesktop: ({ breakpoints }) => ({
    flexGrow: 1,
    padding: '32px',
    [breakpoints.up('lg')]: {
      padding: '48px'
    }
  }),
  CenterWellMobile: ({ breakpoints }) => ({
    [breakpoints.down('sm')]: {
      width: '100%'
    },
    flexGrow: 1,
    padding: '72px 16px 16px 16px',
    [breakpoints.up('sm')]: {
      padding: '96px 32px 32px 32px'
    }
  }),
  CloseIcon: ({ palette }) => ({
    '&.MuiSvgIcon-root': {
      color: palette.common.white
    }
  }),
  Container: () => ({
    display: 'flex',
    minHeight: '100vh'
  }),
  Divider: () => ({
    borderColor: 'white'
  }),
  HomeLink: () => ({
    display: 'flex'
  }),
  FixedHeaderOffset: () => ({
    margin: 0
  }),
  ListTop: () => ({
    paddingTop: '2rem'
  }),
  ListItem: ({ breakpoints }) => ({
    width: '100%',
    [breakpoints.up('sm')]: {
      width: '375px'
    },
    [breakpoints.up('md')]: {
      width: '100%'
    }
  }),
  LogoIcon: ({ palette }) => ({
    '&.MuiSvgIcon-root': {
      color: palette.common.white,
      marginRight: '0.5rem'
    }
  }),
  MenuLink: ({ palette }) => ({
    color: palette.common.white
  }),
  MenuLinkIcon: ({ palette }) => ({
    '&.MuiSvgIcon-root': {
      color: palette.common.white
    }
  }),
  SidebarMobile: ({ palette }) => ({
    '& .MuiDrawer-paper': {
      width: '100%',
      backgroundColor: palette.primary.main
    }
  }),
  SidebarDesktop: ({ palette }) => ({
    'width': '275px',
    'flexShrink': 0,
    '& .MuiDrawer-paper': {
      width: '275px',
      backgroundColor: palette.primary.main
    }
  })
};

export default styles;
