import { createContext, useContext, useState } from 'react';
import { API_URLS } from '../_actions/_api-urls';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isAuthenticatedState, sessionState } from '../_state/session';
import { userState } from '../_state/user';
import { useAlertActions } from '../_actions/alert.actions';
import { useNavigate } from 'react-router';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const setSession = useSetRecoilState(sessionState);
  const setUser = useSetRecoilState(userState);
  const alertActions = useAlertActions();

  const login = async (data, onSuccess) => {
    const url = `${API_URLS.Users}/login`;
    const body = JSON.stringify(data);

    setIsAuthenticating(true);

    try {
      const response = await axios.post(url, body, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response?.data && Object.keys(response?.data).length) {
        setIsAuthenticating(false);
        setUser({
          username: response.data.username,
          firstName: response.data.firstName,
          lastName: response.data.lastName
        });
        setSession({ token: response.data.token, isAuthenticated: true });
        onSuccess();
      }
    } catch (err) {
      setIsAuthenticating(false);
      alertActions.error('An error occurred', err.response, err.message, err.request);
    }
  };

  const logout = () => {
    setSession(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticating, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
