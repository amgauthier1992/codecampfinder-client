import { CircularProgress, Typography } from '@mui/material';
import { userCoursesState, userState } from '../../_state/user';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useDeleteUserCourse, useGetUserCourses } from '../../_actions/users.actions';
import Snackbar from '../../components/Snackbar';
import UserCoursesList from '../../components/UserCoursesList';
import styles from './styles';

const UserCourses = () => {
  const { loaded } = useGetUserCourses();
  const { loading } = useDeleteUserCourse();
  const [alertVisible, setAlertVisible] = useState(false);
  const user = useRecoilValue(userState);
  const userCourses = useRecoilValue(userCoursesState);

  const toggleDeleteSuccessAlert = useCallback(() => {
    setAlertVisible(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [alertVisible]);

  return (
    <>
      <Typography
        variant='h1'
        color='primary'
      >
        {`Welcome, ${user.firstName}!`}
      </Typography>
      <Typography
        variant='body1'
        sx={styles.Foreword}
      >
        {`Here you will find a list of courses that you have added to your curated catalog. You can
        add more courses by navigating to the 'Find Courses' form.`}
      </Typography>
      <Typography
        variant='body1'
        sx={styles.AfterWord}
      >
        {`While we do our best to keep course information up to date, we also encourage you to visit each bootcamp's website directly in order to get the most up to date information on course specifics.`}
      </Typography>
      <Typography
        variant='h3'
        color='primary'
        sx={styles.CourseListHeader}
      >
        My Course List
      </Typography>
      {alertVisible && (
        <Snackbar
          message='Course removed!'
          open={alertVisible}
        />
      )}
      {(!loaded || loading) && <CircularProgress />}
      {loaded && userCourses?.length > 0 && (
        <UserCoursesList
          toggleDeleteSuccessAlert={toggleDeleteSuccessAlert}
          userCourses={userCourses}
        />
      )}
      {loaded && userCourses?.length === 0 && (
        <Typography
          variant='body1'
          fontWeight={600}
        >
          No courses to display
        </Typography>
      )}
    </>
  );
};

export default UserCourses;