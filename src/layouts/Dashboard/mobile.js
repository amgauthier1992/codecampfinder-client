import { AppBar, Box, Drawer, IconButton, Stack, Toolbar, Typography, styled } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

import CloseIcon from '@mui/icons-material/Close';
import DataObjectIcon from '@mui/icons-material/DataObject';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import styles from './styles';
import MenuLinks from './links';

const ToolbarStyles = styled('div')(({ theme }) => theme.mixins.toolbar);

const DashboardMobile = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const containerRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = useCallback(() => setSidebarOpen(!sidebarOpen), [sidebarOpen]);

  const handleClickMenuItem = useCallback(
    (location) => {
      if (!location) return;
      else if (location === 'login') {
        logout();
        navigate('/login');
      } else {
        navigate(location);
        handleSidebarToggle();
      }
    },
    [handleSidebarToggle, logout, navigate]
  );

  return (
    <Box
      ref={containerRef}
      sx={styles.Container}
    >
      <AppBar
        position='fixed'
        elevation={4}
      >
        <Toolbar>
          <Stack
            direction='row'
            justifyContent='space-between'
            sx={{ width: '100%' }}
          >
            <IconButton onClick={handleSidebarToggle}>
              <MenuOutlinedIcon sx={styles.MenuLinkIcon} />
            </IconButton>
            <Stack
              direction='row'
              alignItems='center'
            >
              <DataObjectIcon sx={styles.LogoIcon} />
              <Typography
                color='common.white'
                variant='h6'
              >
                Codecamp Finder
              </Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <ToolbarStyles
        name='FixedHeaderOffset'
        sx={styles.FixedHeaderOffset}
      />
      <Drawer
        anchor='left'
        open={sidebarOpen}
        onClose={handleSidebarToggle}
        sx={styles.SidebarMobile}
        variant='temporary'
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        <Toolbar>
          <IconButton onClick={handleSidebarToggle}>
            <CloseIcon sx={styles.CloseIcon} />
          </IconButton>
        </Toolbar>
        <MenuLinks handleClickMenuItem={handleClickMenuItem} />
      </Drawer>
      <Box sx={styles.CenterWellMobile}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardMobile;
