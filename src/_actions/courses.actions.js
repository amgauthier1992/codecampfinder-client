import { useCallback, useState } from 'react';
import { coursesState } from '../_state/courses';
import { sessionState } from '../_state/session';
import { userState } from '../_state/user';
import { API_URLS } from './_api-urls';
import { useAlertActions } from './alert.actions';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

export const useSearchCourses = () => {
  const navigate = useNavigate();
  const alertActions = useAlertActions();
  const setCourses = useSetRecoilState(coursesState);
  const setSession = useSetRecoilState(sessionState);
  const setUser = useSetRecoilState(userState);
  const [loading, setLoading] = useState(false);

  const search = useCallback(async (data, onSuccess) => {
    const url = `${API_URLS.Search}`;
    const body = JSON.stringify(data);
    const token = JSON.parse(localStorage.getItem('session')).token;

    setLoading(true);

    try {
      const response = await axios.post(url, body, {
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`,
        },
      });

      setLoading(false);
      setCourses({
        offerings: response?.data,
      });
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

  return { loading, search };
};
