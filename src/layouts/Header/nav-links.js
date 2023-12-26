import { Link as MUILink, Stack } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';
import styles from './styles';

const NavLinks = () => {
  return (
    <Stack
      direction='row'
      spacing={2}
    >
      <MUILink
        component={ReactRouterLink}
        to='/sign-up'
        sx={styles.NavLink}
      >
        Sign Up
      </MUILink>
      <MUILink
        component={ReactRouterLink}
        to='/login'
        sx={styles.NavLink}
      >
        Login
      </MUILink>
      {/*If logged in already, show Avatar instead*/}
    </Stack>
  );
};

export default NavLinks;
