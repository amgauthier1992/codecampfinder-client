import { green } from '@mui/material/colors';

const styles = {
  Avatar: ({ palette }) => ({
    backgroundColor: green[500],
    color: palette.common.white,
    width: 38,
    height: 38
  }),
  Brand: () => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: 700,
    color: 'inherit',
    textDecoration: 'none'
  }),
  IconButton: () => ({
    marginLeft: 2
  }),
  LogoIcon: () => ({
    width: '35px',
    height: '35px',
    marginRight: '1rem'
  }),
  NavLink: () => ({
    color: 'inherit',
    fontWeight: 600
  }),
  Toolbar: () => ({
    display: 'flex',
    justifyContent: 'space-between'
  })
};

export default styles;
