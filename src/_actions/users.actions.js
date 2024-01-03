import { useCallback, useState } from 'react';
import { sessionState } from '../_state/session';
import { userState, userCoursesState } from '../_state/user';
import { API_URLS } from './_api-urls';
import { useAlertActions } from './alert.actions';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

export const useRegisterUser = () => {
  const alertActions = useAlertActions();
  const [loading, setLoading] = useState(false);

  const post = useCallback(async (data, onSuccess) => {
    const url = `${API_URLS.Users}/register`;
    const body = JSON.stringify(data);

    setLoading(true);

    try {
      const response = await axios.post(url, body, {
        headers: {
          'content-type': 'application/json'
        }
      });

      setLoading(false);
      onSuccess();
    } catch (err) {
      setLoading(false);
      alertActions.error('An error occurred', err.response, err.message, err.request);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, post };
};

export const usePostUserCourse = () => {
  const navigate = useNavigate();
  const alertActions = useAlertActions();
  const setUserCourses = useSetRecoilState(userCoursesState);
  const setSession = useSetRecoilState(sessionState);
  const setUser = useSetRecoilState(userState);
  const [loading, setLoading] = useState(false);

  const post = useCallback(async (data, onSuccess) => {
    const url = `${API_URLS.User}/courses`;
    const body = JSON.stringify(data);
    const token = JSON.parse(localStorage.getItem('session')).token;

    setLoading(true);

    try {
      const response = await axios.post(url, body, {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`
        }
      });

      setLoading(false);
      setUserCourses(response?.data);
      onSuccess();
    } catch (err) {
      setLoading(false);

      if (err?.response?.status === 401) {
        //clear stale state data and navigate to /unauthorized route to force user to (re)authenticate
        setSession(null);
        setUser(null);
        navigate('/unauthorized');
      } else {
        alertActions.error('An error occurred', err.response, err.message, err.request);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, post };
};
