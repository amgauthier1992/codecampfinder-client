import { AppBar, Box, Drawer, Toolbar, Typography } from '@mui/material';

import { Outlet, useNavigate } from 'react-router';

import MenuLinks from './links';
import DataObjectIcon from '@mui/icons-material/DataObject';
import styles from './styles';
import { useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function DashboardDesktop() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClickMenuItem = useCallback(
    (location) => {
      if (!location) return;
      else if (location === 'login') {
        logout();
        navigate('/login');
      } else {
        navigate(location);
      }
    },
    [logout, navigate],
  );

  return (
    <Box sx={styles.Container}>
      <AppBar
        position='fixed'
        sx={styles.AppBarDesktop}
      />
      <Drawer
        anchor='left'
        elevation={4}
        sx={styles.SidebarDesktop}
        variant='permanent'
      >
        <Toolbar>
          <DataObjectIcon sx={styles.LogoIcon} />{' '}
          <Typography
            color='common.white'
            component='div'
            fontWeight={800}
            variant='body1'
          >
            Codecamp Finder
          </Typography>
        </Toolbar>
        <MenuLinks handleClickMenuItem={handleClickMenuItem} />
      </Drawer>
      <Box sx={styles.CenterWellDesktop}>
        <Outlet />
      </Box>
    </Box>
  );
}
