import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './styles';
import UserCourseListItem from '../UserCourseListItem';

const UserCoursesList = ({ toggleCourseDetailsModal, toggleDeleteSuccessAlert, userCourses }) => {
  const userCoursesCopy = [...userCourses];
  const sortedCourses = userCoursesCopy.sort((a, b) => {
    return a.Bootcamp.localeCompare(b.Bootcamp);
  });

  return (
    <Grid container>
      {sortedCourses.map((userCourse) => (
        <Grid
          key={userCourse.CourseId}
          item
          xs={12}
          lg={6}
          xl={4}
          sx={styles.GridItem}
        >
          <UserCourseListItem
            toggleCourseDetailsModal={toggleCourseDetailsModal}
            toggleDeleteSuccessAlert={toggleDeleteSuccessAlert}
            userCourse={userCourse}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCoursesList;

UserCoursesList.propTypes = {
  toggleCourseDetailsModal: PropTypes.func.isRequired,
  toggleDeleteSuccessAlert: PropTypes.func.isRequired,
  userCourses: PropTypes.arrayOf(
    PropTypes.shape({
      Bootcamp: PropTypes.string,
      Course: PropTypes.string,
      CourseId: PropTypes.number
    })
  )
};
