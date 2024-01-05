import { Backdrop, Button, CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useSearchCourses } from '../../_actions/courses.actions';
import { usePostUserCourse } from '../../_actions/users.actions';
import Snackbar from '../../components/Snackbar';
import CourseList from '../../components/CourseList';
import SearchForm from '../../components/SearchForm';
import styles from './styles';

const BootcampSearch = () => {
  const { loading: searchingCourses } = useSearchCourses();
  const { loading: addingUserCourse } = usePostUserCourse();
  const [formHidden, setFormHidden] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleDisplayResults = useCallback(() => {
    setFormHidden(true);
  }, []);

  const togglePostSuccessAlert = useCallback(() => {
    setAlertVisible(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [alertVisible]);

  return (
    <>
      <Backdrop
        open={searchingCourses || addingUserCourse}
        sx={styles.Backdrop}
      >
        <CircularProgress color='primary' />
      </Backdrop>
      {alertVisible && (
        <Snackbar
          message='Course Added!'
          open={alertVisible}
        />
      )}
      {!formHidden && <SearchForm handleDisplayResults={handleDisplayResults} />}
      {formHidden && <CourseList toggleSuccessAlert={togglePostSuccessAlert} />}
      {formHidden && (
        <Button
          variant='contained'
          onClick={() => setFormHidden(false)}
          sx={styles.BackToSearchBtn}
        >
          Back To Search
        </Button>
      )}
    </>
  );
};

export default BootcampSearch;
