import axios from 'axios';
import { API_URLS } from './_api-urls';
import { useCallback, useState } from 'react';
import { useAlertActions } from './alert.actions';

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
          'Content-Type': 'application/json'
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
