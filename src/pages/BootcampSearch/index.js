import { Alert, Backdrop, Button, CircularProgress, Snackbar } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useSearchCourses } from '../../_actions/courses.actions';
import { usePostUserCourse } from '../../_actions/users.actions';
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

  const toggleSuccessAlert = useCallback(() => {
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
          autoHideDuration={null}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={alertVisible}
        >
          <Alert
            variant='filled'
            severity='success'
            sx={styles.Alert}
          >
            Course Added!
          </Alert>
        </Snackbar>
      )}
      {!formHidden && <SearchForm handleDisplayResults={handleDisplayResults} />}
      {formHidden && <CourseList toggleSuccessAlert={toggleSuccessAlert} />}
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
