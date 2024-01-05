import { useCallback, useEffect, useState } from 'react';
import { sessionState } from '../_state/session';
import { userState, userCoursesState, currentUserCourseState } from '../_state/user';
import { API_URLS } from './_api-urls';
import { useAlertActions } from './alert.actions';
import { useNavigate } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
  const [userCourses, setUserCourses] = useRecoilState(userCoursesState);
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
          'authorization': `Bearer ${token}`
        }
      });

      setLoading(false);

      const copyUserCourses = [...userCourses];
      copyUserCourses.push({
        Bootcamp: data.Bootcamp,
        Course: data.Course,
        CourseId: response?.data.course_id
      });

      setUserCourses(copyUserCourses);
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

export function useGetUserCourses() {
  const navigate = useNavigate();
  const alertActions = useAlertActions();
  const setUserCourses = useSetRecoilState(userCoursesState);
  const setSession = useSetRecoilState(sessionState);
  const setUser = useSetRecoilState(userState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    function abort() {
      controller.abort();
    }

    setLoaded(false);

    const getUserCourses = async () => {
      const url = `${API_URLS.User}/courses`;
      const token = JSON.parse(localStorage.getItem('session')).token;

      try {
        const response = await axios.get(url, {
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`
          },
          signal: signal
        });

        setUserCourses(response.data);
        setLoaded(true);
      } catch (err) {
        setLoaded(false);

        if (err?.response?.status === 401) {
          //clear stale state data and navigate to /unauthorized route to force user to (re)authenticate
          setSession(null);
          setUser(null);
          navigate('/unauthorized');
        } else {
          alertActions.error('An error occurred', err.response, err.message, err.request);
        }
      }
    };

    getUserCourses();

    return abort;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loaded };
}

export function useGetUserCourseDetails() {
  const navigate = useNavigate();
  const alertActions = useAlertActions();
  const setCurrentUserCourse = useSetRecoilState(currentUserCourseState);
  const setSession = useSetRecoilState(sessionState);
  const setUser = useSetRecoilState(userState);
  const [loaded, setLoaded] = useState(false);

  const get = useCallback(async (courseId, bootcamp, onSuccess) => {
    const url = `${API_URLS.User}/course/${courseId}`;
    const token = JSON.parse(localStorage.getItem('session')).token;

    setLoaded(true);

    try {
      const response = await axios.get(url, {
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      });

      if (response?.data) {
        response.data.Course.bootcamp = bootcamp;
      }

      setLoaded(false);
      setCurrentUserCourse(response?.data);
      onSuccess();
    } catch (err) {
      setLoaded(false);

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

  return { loaded, get };
}

export function useDeleteUserCourse() {
  const navigate = useNavigate();
  const alertActions = useAlertActions();
  const setUserCourses = useSetRecoilState(userCoursesState);
  const setSession = useSetRecoilState(sessionState);
  const setUser = useSetRecoilState(userState);
  const [loading, setLoading] = useState(false);

  const destroy = useCallback(async (courseId, onSuccess) => {
    const url = `${API_URLS.User}/course/${courseId}`;
    const token = JSON.parse(localStorage.getItem('session')).token;

    setLoading(true);

    try {
      const response = await axios.delete(url, {
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`
        }
      });

      setLoading(false);
      setUserCourses((prevUserCourses) =>
        prevUserCourses.filter((userCourse) => userCourse.CourseId !== courseId)
      );
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

  return { loading, destroy };
}
