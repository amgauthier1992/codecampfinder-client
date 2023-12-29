import { Divider, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import Logout from '@mui/icons-material/Logout';

const UserMenu = ({ anchorEl, handleClose, open }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleRedirectToDashboard = useCallback(() => {
    navigate('/dashboard');
  }, [navigate]);

  const handleLogout = useCallback(() => {
    handleClose();
    logout();
  }, [handleClose, logout]);

  return (
    <Menu
      anchorEl={anchorEl}
      id='account-menu'
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleRedirectToDashboard}>
        <ListItemIcon>
          <SpaceDashboardOutlinedIcon
            color='primary'
            fontSize='small'
          />
        </ListItemIcon>
        <Typography
          variant='body1'
          fontWeight={500}
        >
          Dashboard
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout
            color='primary'
            fontSize='small'
          />
        </ListItemIcon>
        <Typography
          variant='body1'
          fontWeight={500}
        >
          Logout
        </Typography>
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
