import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    children //Outlet?
  ) : (
    <Navigate
      to='/login'
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;
