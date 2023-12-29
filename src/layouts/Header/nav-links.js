import { Avatar, IconButton, Link as MUILink, Stack, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { userState } from '../../_state/user';
import { useRecoilValue } from 'recoil';
import UserMenu from './menu';
import styles from './styles';

const NavLinks = () => {
  const { isAuthenticated } = useAuth();
  const user = useRecoilValue(userState);
  const firstInitial = user?.firstName.charAt(0);
  const lastInitial = user?.lastName.charAt(0);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenUserMenu = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const handleCloseUserMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Stack
        direction='row'
        alignItems='center'
        spacing={4}
      >
        <MUILink
          component={ReactRouterLink}
          to='/sign-up'
          sx={styles.NavLink}
        >
          Sign Up
        </MUILink>
        {isAuthenticated ? (
          <IconButton
            onClick={handleOpenUserMenu}
            size='small'
            sx={styles.IconButton}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={styles.Avatar}>
              <Typography fontWeight={600}>{`${firstInitial}${lastInitial}`}</Typography>
            </Avatar>
          </IconButton>
        ) : (
          <MUILink
            component={ReactRouterLink}
            to='/login'
            sx={styles.NavLink}
          >
            Login
          </MUILink>
        )}
      </Stack>
      <UserMenu
        anchorEl={anchorEl}
        handleClose={handleCloseUserMenu}
        open={open}
      />
    </>
  );
};

export default NavLinks;
