import { Button } from '@mui/material';
import { Outlet } from 'react-router';
import { useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <>
      <Outlet />
      Dashboard
      <Button onClick={handleLogout}>Log Out</Button>
    </>
  );
};

export default Dashboard;
